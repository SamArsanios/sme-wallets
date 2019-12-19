import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recapture',
  templateUrl: './recapture.component.html',
  styleUrls: ['./recapture.component.css']
})
export class RecaptureComponent {
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
}
}

