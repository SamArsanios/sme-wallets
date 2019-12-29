
import { Component, OnInit } from '@angular/core';
import {PageScrollConfig} from 'ng2-page-scroll';


@Component({
  selector: 'app-side-account-settings',
  templateUrl: './side-account-settings.component.html',
  styleUrls: ['./side-account-settings.component.scss']
})
export class SideAccountSettingsComponent{

  constructor() { 
    
      PageScrollConfig.defaultScrollOffset = 260;
      PageScrollConfig.defaultEasingLogic = {
          ease: (t: number, b: number, c: number, d: number): number => {
              // easeInOutExpo easing
              if (t === 0) return b;
              if (t === d) return b + c;
              if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
              return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
          }
      };
  }
  }


