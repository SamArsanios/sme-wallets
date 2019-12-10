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
//Supplier Components
import { SupplierPurchaseOrdersComponent } from "./view/supplier/supplier-purchase-orders/supplier-purchase-orders.component";
import { SupplierVaultComponent } from "./view/supplier/supplier-vault/supplier-vault.component";
//Sponsor

const routes: Routes = [
 { path: 'Payment Notice', component: PaymentInfoComponent},
 { path: 'buyerdashboard', component: BuyersDashboardComponent},
 { path: 'Orders', component: OrdersComponent},
 { path: 'Invite Contacts', component:  InviteContactsComponent},
 { path: 'Invoices', component: InvoicesComponent},
 { path: 'Vault', component: VaultComponent},
 {path: 'Account Settings', component:SideAccountSettingsComponent},
  
 //suppliers
  {
    path: "supplier-purchase-orders",
    component: SupplierPurchaseOrdersComponent
  },
  {
    path: "supplier-vault",
    component: SupplierVaultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
