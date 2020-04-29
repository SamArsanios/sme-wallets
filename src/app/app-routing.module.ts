import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BuyersDashboardComponent } from "./shared/buyers-dashboard/buyers-dashboard.component";
import { PaymentnoticeComponent } from "./view/buyer/paymentnotice/paymentnotice.component";
import { AllOrdersComponent } from "./view/buyer/orders/all-orders/all-orders.component";
import { InvoicesComponent } from "./view/buyer/invoices/invoices.component";
import { OrdersComponent } from "./view/buyer/orders/orders/orders.component";
import { InviteContactsComponent } from "./view/buyer/invites/invite-contacts/invite-contacts.component";
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
import { RegisterComponent } from "./view/register/register.component";
import { LoginComponent } from "./view/login/login.component";

//Sponsor
import { SponsordashboardComponent } from "./shared/sponsordashboard/sponsordashboard.component";
import { SponsorVaultSponsorshipComponent } from "./view/sponsor/sponsor-vault-sponsorship/sponsor-vault-sponsorship.component";
import { SponsorInvoicesComponent } from "./view/sponsor/sponsor-invoices/sponsor-invoices.component";
import { SponsorSettingsComponent } from "./view/sponsor/sponsor-settings/sponsor-settings.component";
import { ViewOrdersComponent } from "./view/buyer/orders/pending-orders/view-orders/view-orders.component";
import { SupplierViewOrdersComponent } from "./view/supplier/supplier-purchase-orders/supplier-pending-orders/supplier-view-orders/supplier-view-orders.component";
import { ViewInvoicesComponent } from "./view/buyer/invoices/view-invoices/view-invoices.component";
import { ViewAllordersComponent } from './view/buyer/orders/all-orders/view-allorders/view-allorders.component';
import { ViewAllApprovedOrdersComponent } from './view/buyer/orders/approve-orders/view-all-approved-orders/view-all-approved-orders.component';
import { ViewSupplierPendingOrdersComponent } from './view/buyer/orders/view-supplier-pending-orders/view-supplier-pending-orders.component';
import { ViewRaisedInvoicesComponent } from './view/buyer/invoices/all-invoices/view-raised-invoices/view-raised-invoices.component';
import { PendingOrdersComponent } from './view/buyer/orders/pending-orders/pending-orders.component';
import { SupplierPendingOrdersComponent } from './view/supplier/supplier-purchase-orders/supplier-pending-orders/supplier-pending-orders.component';
import { ViewSupplierAllOrdersComponent } from './view/supplier/supplier-purchase-orders/supplier-all-orders/view-supplier-all-orders/view-supplier-all-orders.component';
import { ViewSupplierInvoicedOrdersComponent } from './view/supplier/supplier-purchase-orders/supplier-invoiced-orders/view-supplier-invoiced-orders/view-supplier-invoiced-orders.component';
import { ViewApprovedInvoiceComponent } from './view/supplier/supplier-vault/supplier-approved-invoices/view-approved-invoice/view-approved-invoice.component';
import { ViewApproveInvoicesComponent } from './view/buyer/invoices/aprove-invoice/view-approve-invoices/view-approve-invoices.component';
import { ApprovedInvoicesComponent } from './view/buyer/vault/approved-invoices/approved-invoices.component';
import { VewsApprovedInvoicesComponent } from './view/buyer/vault/approved-invoices/vews-approved-invoices/vews-approved-invoices.component';
import { GetPaidComponent } from './view/supplier/supplier-vault/supplier-approved-invoices/get-paid/get-paid.component';
import { ViewSponsorInvoicesComponent } from './view/sponsor/sponsor-invoices/view-sponsor-invoices/view-sponsor-invoices.component';
import { WalletsComponent } from './view/wallets/wallets.component';
import { CreateWalletsComponent } from './view/wallets/create-wallets/create-wallets.component';
import { ViewWalletsComponent } from './view/wallets/view-wallets/view-wallets.component';


const routes: Routes = [
  //suppliers
  { path: "Payment Notice", component: PaymentInfoComponent },
  { path: "home/buyer/buyerdashboard", component: BuyersDashboardComponent },
  { path: "buyer/orders", component: OrdersComponent },
  { path: "buyer/orders/view-orders", component: ViewOrdersComponent },

  { path: "buyer/invoices/view-invoices", component: ViewInvoicesComponent },
  { path: "buyer/orders/view-allorders", component: ViewAllordersComponent},
  { path: "buyer/orders/view-all-approved-orders", component: ViewAllApprovedOrdersComponent},

  { path: "buyer/Invitecontacts", component: InviteContactsComponent },
  { path: "buyer/invoicess", component: InvoicesComponent },
  { path: "buyer/Vault", component: VaultComponent },
  { path: "buyer/accountsettings", component: SideAccountSettingsComponent },
  {
    path: "supplier/accountsettings",
    component: SideAccountSettingssComponent
  },
  {
    path: "supplier/view-approved-invoice-component",
    component: ViewApprovedInvoiceComponent
  },
 
  {
    path: "buyer/pendingOrders",
    component: PendingOrdersComponent
  },
  {
    path: "buyer/view-approve-invoices",
    component: ViewApproveInvoicesComponent
  },

  {
    path: "buyer/vault/view-approve-invoices",
    component: VewsApprovedInvoicesComponent
  },

  
  

  { path: "home/supplier/supplierdashboard", component: SupplierDashComponent },
  { path: "supplier/vault", component: SupplierVaultComponent },
  {
    path: "supplier/payment-information",
    component: PaymentInformationComponent
  },
  { path: "", component: HomeComponent },
  {
    path: "home/sponsor/sponsordashboard",
    component: SponsordashboardComponent
  },
  {
    path: "approve",
    component: OrdersComponent
  },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },

  { path: "buyer/invoices/viewRaisedInvoices", component: ViewRaisedInvoicesComponent},
  // { path: "login", component: LoginComponent },
  { path: "buyer/invoices/viewRaisedInvoices", component: ViewRaisedInvoicesComponent},
  
  
  {

    path: "supplier/orders",
    component: SupplierPurchaseOrdersComponent
  },
  {

    path: "suppliers/view-approved-invoice-component",
    component: ViewSupplierInvoicedOrdersComponent
  },

  {

    path: "sponsor/ViewSponsorInvoicesComponent",
    component: ViewSponsorInvoicesComponent
  },
  {

    

    path: "suppliers/view-approved-invoice-component/getPaid",
    component: GetPaidComponent
  },
  
  

  
  {

    path: "supplier/viewallsuppliers",
    component:   ViewSupplierAllOrdersComponent
  },

  {

    path: "supplier/view-supplier-invoiced-orders-component",
    component:   ViewSupplierInvoicedOrdersComponent
  },


  {
    path: "supplier/supplier-purchase-orders/supplier-view-orders",
    component: SupplierViewOrdersComponent
  },
{
  path: "supplier/view-supplier-pendingorder-orders",
  component: ViewSupplierPendingOrdersComponent
},

{
  path: "supplier/pendingorder-orders",
  component: SupplierPendingOrdersComponent
},
{
path: "buyer/viewRaisedInvoices",
component: ViewRaisedInvoicesComponent
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
  { path: "home", component: HomeComponent },
  { path: "home/wallets", component: WalletsComponent },
  { path: "admin/create-wallet", component: CreateWalletsComponent },
  { path: "admin/view-wallet", component: ViewWalletsComponent },
  { path: "sponsor/account-settings", component: SponsorSettingsComponent }
  // {path: "buyer/accountsettings/#personalInfo",
  // component: SponsorSettingsComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
