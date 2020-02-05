import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpService } from 'src/app/utils/http/http-service';
import { User } from 'src/app/shared/model/user/user-model';
import { ObjectsUtil } from 'src/app/utils/objects/objects';

export interface ILoginData {
  username: string;
  password: string;
}

const loginData: ILoginData = {
  username: null,
  password: null
};

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  currentUser: User;

  constructor(private httpService: HttpService<User>, private objectUtil: ObjectsUtil<User>) { }

  ngOnInit() { }

  onSubmit(form: NgForm) {
    const object = form.value;
    if (form.valid) {


      this.httpService.getRequest(`/users/findUserByEmail/${object.email}`).subscribe(e => {
        if(e.body[0].email === object.email && e.body[0].password === object.password ){
            console.log("you have logged in successfully")
            this.currentUser=e.body;
            console.log(`the current user is ${this.currentUser}`)
            if(e.body[0].userType=="supplier"){
              window.location.href = '/home/supplier/supplierdashboard';
            }
            else if(e.body[0].userType=="buyer"){
              window.location.href = '/home/buyer/buyerdashboard';
            }
            else{
              window.location.href = '/home/sponsor/sponsordashboard';
    
            }
        
      }

    });
  }
}
}
