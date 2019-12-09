import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyersDashboardComponent } from './shared/buyers-dashboard/buyers-dashboard.component';
import { PaymentnoticeComponent } from './view/buyer/paymentnotice/paymentnotice.component';


const routes: Routes = [
 { path: 'Payment Notice', component: PaymentnoticeComponent},
 { path: 'buyerdashboard', component: BuyersDashboardComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
