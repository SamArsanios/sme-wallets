import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyersDashboardComponent } from './shared/buyers-dashboard/buyers-dashboard.component';
import { PaymentnoticeComponent } from './view/buyer/paymentnotice/paymentnotice.component';
import { AllOrdersComponent } from './view/buyer/orders/all-orders/all-orders.component';
import { InvoicesComponent } from './view/buyer/invoices/invoices.component';
import { OrdersComponent } from './view/buyer/orders/orders/orders.component';
import { InviteContactsComponent } from './view/buyer/invite-contacts/invite-contacts.component';
import { VaultComponent } from './view/buyer/vault/vault.component';
import { PaymentInfoComponent } from './view/buyer/payment-info/payment-info.component';
import { SideAccountSettingsComponent } from './view/buyer/side-account-settings/side-account-settings.component';
import { SupplierDashComponent } from './view/supplier/supplier-dash/supplier-dash.component';
import { PaymentInformationComponent } from './view/supplier/payment-information/payment-information.component';



const routes: Routes = [
 { path: 'Payment Notice', component: PaymentInfoComponent},
 { path: 'buyerdashboard', component: BuyersDashboardComponent},
 { path: 'Orders', component: OrdersComponent},
 { path: 'Invite Contacts', component:  InviteContactsComponent},
 { path: 'Invoices', component: InvoicesComponent},
 { path: 'Vault', component: VaultComponent},
 {path: 'Account Settings', component:SideAccountSettingsComponent},
<<<<<<< HEAD
 { path: 'supplierdashboard', component:  SupplierDashComponent},
 { path: 'Payment Information', component:  PaymentInformationComponent},  
=======
  
 //suppliers
  {
    path: "supplier-purchase-orders",
    component: SupplierPurchaseOrdersComponent
  },
  {
    path: "supplier-vault",
    component: SupplierVaultComponent
  }
>>>>>>> 3ad14b0a37ca39300d830ece42b3aa324c036c94
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
