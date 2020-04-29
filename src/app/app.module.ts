import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPhoneNumberInputModule } from 'projects/phone-input/src/public_api';

import { Ng2PageScrollModule } from 'ng2-page-scroll';
// forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideAccountSettingsComponent } from './view/buyer/side-account-settings/side-account-settings.component';
import { SuppliernavComponent } from './shared/suppliernav/suppliernav.component';
import { SupplierDashComponent } from './view/supplier/supplier-dash/supplier-dash.component';
import { PaymentInformationComponent } from './view/supplier/payment-information/payment-information.component';
import { BalanceComponent } from './view/supplier/balance/balance.component';
import { TransactionalHistoryComponent } from './view/supplier/transactional-history/transactional-history.component';
import { HomeComponent } from './shared/home/home.component';
import { SideAccountSettingssComponent } from './view/supplier/side-account-settingss/side-account-settingss.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { BuyersDashboardComponent } from './shared/buyers-dashboard/buyers-dashboard.component';
import { PaymentnoticeComponent } from './view/buyer/paymentnotice/paymentnotice.component';
import { BuyernavComponent } from './shared/buyernav/buyernav.component';
import { PaymentInfoComponent } from './view/buyer/payment-info/payment-info.component';
import { AllOrdersComponent } from './view/buyer/orders/all-orders/all-orders.component';
import { InvoicesComponent } from './view/buyer/invoices/invoices.component';
// import { ApproveInvoicesComponent } from './view/buyer/invoices/approve-invoices/approve-invoices.component';
// import { AllInvoicesComponent } from './view/buyer/orders/all-orders/all-orders.component';
// import { ApprovedInvoicesComponent } from './view/buyer/vault/approved-invoices/approved-invoices.component';
import { CompletedInvoicesComponent } from './view/buyer/vault/completed-invoices/completed-invoices.component';
import { VaultComponent } from './view/buyer/vault/vault.component';
import { OrdersComponent } from './view/buyer/orders/orders/orders.component';
import { CreateOrderComponent } from './view/buyer/orders/create-order/create-order.component';
import { ApproveOrdersComponent } from './view/buyer/orders/approve-orders/approve-orders.component';
import { PendingOrdersComponent } from './view/buyer/orders/pending-orders/pending-orders.component';
import { InviteContactsComponent } from './view/buyer/invites/invite-contacts/invite-contacts.component';
// forms
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { SupplierPurchaseOrdersComponent } from './view/supplier/supplier-purchase-orders/supplier-purchase-orders.component';
// tslint:disable-next-line:max-line-length
import { SupplierPendingOrdersComponent } from './view/supplier/supplier-purchase-orders/supplier-pending-orders/supplier-pending-orders.component';
// tslint:disable-next-line:max-line-length
import { SupplierCurrentOrdersComponent } from './view/supplier/supplier-purchase-orders/supplier-current-orders/supplier-current-orders.component';
// tslint:disable-next-line:max-line-length
import { SupplierInvoicedOrdersComponent } from './view/supplier/supplier-purchase-orders/supplier-invoiced-orders/supplier-invoiced-orders.component';
import { SupplierAllOrdersComponent } from './view/supplier/supplier-purchase-orders/supplier-all-orders/supplier-all-orders.component';
// tslint:disable-next-line:max-line-length
import { SupplierDeclinedInvoicesComponent } from './view/supplier/supplier-vault/supplier-declined-invoices/supplier-declined-invoices.component';
// tslint:disable-next-line:max-line-length
import { SupplierApprovedInvoicesComponent } from './view/supplier/supplier-vault/supplier-approved-invoices/supplier-approved-invoices.component';
// tslint:disable-next-line:max-line-length
import { SupplierFinancedInvoicesComponent } from './view/supplier/supplier-vault/supplier-financed-invoices/supplier-financed-invoices.component';
import { SupplierVaultComponent } from './view/supplier/supplier-vault/supplier-vault.component';

import { SponsordashboardComponent } from './shared/sponsordashboard/sponsordashboard.component';
import { SponsornavComponent } from './shared/sponsornav/sponsornav.component';
import { RegisterComponent } from './view/register/register.component';
import { LoginComponent } from './view/login/login.component';
import { SponsorInvoicesComponent } from './view/sponsor/sponsor-invoices/sponsor-invoices.component';
import { SponsorVaultSponsorshipComponent } from './view/sponsor/sponsor-vault-sponsorship/sponsor-vault-sponsorship.component';
import { SponsorSettingsComponent } from './view/sponsor/sponsor-settings/sponsor-settings.component';
import { RecaptureComponent } from './view/recapture/recapture.component';
//  recapture
import { RecaptchaModule } from 'ng-recaptcha';
import { MyBarChartComponent } from './shared/my-bar-chart/my-bar-chart.component';
import { HighpchartComponent } from './shared/highpchart/highpchart.component';
import { PhonenumberComponent } from './view/register/phonenumber/phonenumber.component';
import { ChartsModule } from 'ng2-charts';
// import {duScroll} from '../../node_modules/angular-scroll'
import { MyDoughnutChartComponent } from './shared/my-doughnut-chart/my-doughnut-chart.component';
import { MyPieChartComponent } from './shared/my-pie-chart/my-pie-chart.component';
import { ScrollSpyModule } from './shared/scroll-spy';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ViewOrdersComponent } from './view/buyer/orders/pending-orders/view-orders/view-orders.component';
import { SupplierViewOrdersComponent } from './view/supplier/supplier-purchase-orders/supplier-pending-orders/supplier-view-orders/supplier-view-orders.component';

import { ViewInvoicesComponent } from './view/buyer/invoices/view-invoices/view-invoices.component';
import { ViewAllordersComponent } from './view/buyer/orders/all-orders/view-allorders/view-allorders.component';
import { ViewAllApprovedOrdersComponent } from './view/buyer/orders/approve-orders/view-all-approved-orders/view-all-approved-orders.component';
// tslint:disable-next-line:max-line-length
import { ViewSupplierPendingOrdersComponent } from './view/buyer/orders/view-supplier-pending-orders/view-supplier-pending-orders.component';
import { ViewApprovedInvoiceComponent } from './view/supplier/supplier-vault/supplier-approved-invoices/view-approved-invoice/view-approved-invoice.component';
import { ViewRaisedInvoicesComponent } from './view/buyer/invoices/all-invoices/view-raised-invoices/view-raised-invoices.component';
import { AllInvoicesComponent } from './view/buyer/invoices/all-invoices/all-invoices.component';
import { ViewSupplierAllOrdersComponent } from './view/supplier/supplier-purchase-orders/supplier-all-orders/view-supplier-all-orders/view-supplier-all-orders.component';
import { ViewSupplierInvoicedOrdersComponent } from './view/supplier/supplier-purchase-orders/supplier-invoiced-orders/view-supplier-invoiced-orders/view-supplier-invoiced-orders.component';
import { ViewApproveInvoicesComponent } from './view/buyer/invoices/aprove-invoice/view-approve-invoices/view-approve-invoices.component';
import { AproveInvoiceComponent } from './view/buyer/invoices/aprove-invoice/aprove-invoice.component';
import { ApprovedInvoicesComponent } from './view/buyer/vault/approved-invoices/approved-invoices.component';
import { VewsApprovedInvoicesComponent } from './view/buyer/vault/approved-invoices/vews-approved-invoices/vews-approved-invoices.component';
import { GetPaidComponent } from './view/supplier/supplier-vault/supplier-approved-invoices/get-paid/get-paid.component';
import { ViewSponsorInvoicesComponent } from './view/sponsor/sponsor-invoices/view-sponsor-invoices/view-sponsor-invoices.component';
import { ViewContactsComponent } from './view/buyer/invites/view-contacts/view-contacts.component';
import { ViewSuppliersComponent } from './view/buyer/invites/view-suppliers/view-suppliers.component';
import { WalletsComponent } from './view/wallets/wallets.component';
import { CreateWalletsComponent } from './view/wallets/create-wallets/create-wallets.component';
import { WalletsnavComponent } from './shared/walletsnav/walletsnav.component';
import { WalletHeaderComponent } from './shared/header/wallet-header/wallet-header.component';
import { ViewWalletsComponent } from './view/wallets/view-wallets/view-wallets.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BuyersDashboardComponent,
    PaymentnoticeComponent,
    BuyernavComponent,
    PaymentInfoComponent,

    AllOrdersComponent,
    InvoicesComponent,
    AllInvoicesComponent,
    ApprovedInvoicesComponent,
    CompletedInvoicesComponent,
    VaultComponent,
    OrdersComponent,
    CreateOrderComponent,
    ApproveOrdersComponent,
    PendingOrdersComponent,
    InviteContactsComponent,
    SideAccountSettingsComponent,
    SuppliernavComponent,
    SupplierDashComponent,
    PaymentInformationComponent,
    SupplierDashComponent,
    BalanceComponent,
    TransactionalHistoryComponent,
    HomeComponent,
    SideAccountSettingssComponent,
    SupplierPurchaseOrdersComponent,
    SupplierPendingOrdersComponent,
    SupplierCurrentOrdersComponent,
    SupplierInvoicedOrdersComponent,
    SupplierAllOrdersComponent,
    SupplierDeclinedInvoicesComponent,
    SupplierApprovedInvoicesComponent,
    SupplierFinancedInvoicesComponent,
    SupplierVaultComponent,
    SideAccountSettingsComponent,
    SponsordashboardComponent,
    SponsornavComponent,
    RegisterComponent,
    LoginComponent,
    SponsorInvoicesComponent,
    SponsorVaultSponsorshipComponent,
    SponsorSettingsComponent,
    RecaptureComponent,
    HighpchartComponent,
    PhonenumberComponent,
    MyBarChartComponent,
    MyDoughnutChartComponent,
    MyPieChartComponent,
    ViewOrdersComponent,
    SupplierViewOrdersComponent,
    ViewInvoicesComponent,
    ViewAllordersComponent,
    ViewAllApprovedOrdersComponent,
    ViewSupplierPendingOrdersComponent,
    ViewApprovedInvoiceComponent,
    ViewRaisedInvoicesComponent,
    SupplierAllOrdersComponent,
    ViewSupplierAllOrdersComponent,
    ViewSupplierInvoicedOrdersComponent,
    ViewApproveInvoicesComponent,
    AproveInvoiceComponent,
    VewsApprovedInvoicesComponent,
    GetPaidComponent,
    ViewSponsorInvoicesComponent,
    ViewContactsComponent,
    ViewSuppliersComponent,
    WalletsComponent,
    CreateWalletsComponent,
    WalletsnavComponent,
    WalletHeaderComponent,
    ViewWalletsComponent

    // PiechartComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    // duScroll,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2PageScrollModule,
    RecaptchaModule,
    NgxPhoneNumberInputModule,
    BrowserAnimationsModule,
    ChartsModule,
    InViewportModule,
    ScrollSpyModule.forRoot(),
    // duScroll.scrollspy
    MDBBootstrapModule.forRoot(),
    NgxMaterialTimepickerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
