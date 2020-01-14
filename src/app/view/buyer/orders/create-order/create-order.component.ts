import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { SupplierService } from '../../../../service/supplier/supplier.service'
import { SupplierData} from '../../../../service/supplier/supplier.data'

@Component({
  selector: "app-create-order",
  templateUrl: "./create-order.component.html",
  styleUrls: ["./create-order.component.css"]
})
export class CreateOrderComponent implements OnInit {
  // receivers
  //  = ["SME", "AGRIC", "Test1", "Admin", "test_wallet", "ret", "test",
  // "test_new", "OGAS Wallet", "test", "asd", "ert", "demo"]
  
  date = new Date();
  dateCtrl: FormControl;
  constructor(private supplierService: SupplierService) {}

  ngOnInit() {

    this.supplierService.getAllSuppliers();

    this.dateCtrl = new FormControl("", [Validators.required]);
  }
}
