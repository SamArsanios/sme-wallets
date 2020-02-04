import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BuyersDashboardComponent } from "./shared/buyers-dashboard/buyers-dashboard.component";
import { PaymentnoticeComponent } from "./view/buyer/paymentnotice/paymentnotice.component";
import { AllOrdersComponent } from "./view/buyer/orders/all-orders/all-orders.component";
import { InvoicesComponent } from "./view/buyer/invoices/invoices.component";
import { OrdersComponent } from "./view/buyer/orders/orders/orders.component";
import { InviteContactsComponent } from "./view/buyer/invite-contacts/invite-contacts.component";
import { VaultComponent } from "./view/buyer/vault/vault.component";
import { PaymentInfoComponent } from "./view/buyer/payment-info/payment-info.component";
import { SideAccountSettingsComponent } from "./view/buyer/side-account-settings/side-account-settings.component";

import { SupplierDashComponent } from "./view/supplier/supplier-dash/supplier-dash.component";
import { PaymentInformationComponent } from "./view/supplier/payment-information/payment-information.component";
import { HomeComponent } from "./shared/home/home.component";
import { SideAccountSettingssComponent } from "./view/supplier/side-account-settingss/side-account-settingss.component";

//Supplier Components
import { SupplierPurchaseOrdersComponent } from "./view/supplier/supplier-purchase-orders/supplier-purchase-orders.component";
import { SupplierVaultComponent } from "./view/supplier/supplier-vault/supplier-vault.component";
import { RegisterComponent } from './view/register/register.component';
import { LoginComponent } from './view/login/login.component';

//Sponsor
import { SponsordashboardComponent } from './shared/sponsordashboard/sponsordashboard.component';
import { SponsorVaultSponsorshipComponent } from "./view/sponsor/sponsor-vault-sponsorship/sponsor-vault-sponsorship.component";
import { SponsorInvoicesComponent } from "./view/sponsor/sponsor-invoices/sponsor-invoices.component";
import { SponsorSettingsComponent } from './view/sponsor/sponsor-settings/sponsor-settings.component';

const routes: Routes = [
  //suppliers
 { path: 'Payment Notice', component: PaymentInfoComponent},
 { path: 'home/buyer/buyerdashboard', component: BuyersDashboardComponent},
 { path: 'buyer/orders', component: OrdersComponent},
 { path: 'buyer/Invitecontacts', component:  InviteContactsComponent},
 { path: 'buyer/invoices', component: InvoicesComponent},
 { path: 'buyer/Vault', component: VaultComponent},
 {path: 'buyer/accountsettings', component:SideAccountSettingsComponent},
 {path: 'supplier/accountsettings', component:SideAccountSettingssComponent},

 { path: 'home/supplier/supplierdashboard', component:  SupplierDashComponent},
 { path: "supplier/vault", component: SupplierVaultComponent },
 { path: 'supplier/payment-information', component:  PaymentInformationComponent}, 
 { path: '', component:  HomeComponent},
 { path: 'home/sponsor/sponsordashboard', component:  SponsordashboardComponent}, 
 { path: 'register', component:  RegisterComponent}, 
 { path: 'login', component: LoginComponent}, 

  
  {
    path: "supplier/orders",
    component: SupplierPurchaseOrdersComponent
  },
  {
    path: "supplier/vault",
    component: SupplierVaultComponent
  },
  {
    path: "sponsor/invoices",
    component: SponsorInvoicesComponent
  },
  {
    path: "sponsor/vault",
    component: SponsorVaultSponsorshipComponent
  },
  { path: 'home', component: HomeComponent},

  {path: "sponsor/account-settings",
  component: SponsorSettingsComponent
}
// {path: "buyer/accountsettings/#personalInfo",
// component: SponsorSettingsComponent
// },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
