import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {Ng2PageScrollModule} from 'ng2-page-scroll';
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
import { ApproveInvoicesComponent } from './view/buyer/invoices/approve-invoices/approve-invoices.component';
import { AllInvoicesComponent } from './view/buyer/invoices/all-invoices/all-invoices.component';
import { ApprovedInvoicesComponent } from './view/buyer/vault/approved-invoices/approved-invoices.component';
import { CompletedInvoicesComponent } from './view/buyer/vault/completed-invoices/completed-invoices.component';
import { VaultComponent } from './view/buyer/vault/vault.component';
import { OrdersComponent } from './view/buyer/orders/orders/orders.component';
import { CreateOrderComponent } from './view/buyer/orders/create-order/create-order.component';
import { ApproveOrdersComponent } from './view/buyer/orders/approve-orders/approve-orders.component';
import { PendingOrdersComponent } from './view/buyer/orders/pending-orders/pending-orders.component';
import { InviteContactsComponent } from './view/buyer/invite-contacts/invite-contacts.component';
// forms
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SupplierPurchaseOrdersComponent } from "./view/supplier/supplier-purchase-orders/supplier-purchase-orders.component";
import { SupplierPendingOrdersComponent } from "./view/supplier/supplier-purchase-orders/supplier-pending-orders/supplier-pending-orders.component";
import { SupplierCurrentOrdersComponent } from "./view/supplier/supplier-purchase-orders/supplier-current-orders/supplier-current-orders.component";
import { SupplierInvoicedOrdersComponent } from "./view/supplier/supplier-purchase-orders/supplier-invoiced-orders/supplier-invoiced-orders.component";
import { SupplierAllOrdersComponent } from "./view/supplier/supplier-purchase-orders/supplier-all-orders/supplier-all-orders.component";
import { SupplierDeclinedInvoicesComponent } from "./view/supplier/supplier-vault/supplier-declined-invoices/supplier-declined-invoices.component";
import { SupplierApprovedInvoicesComponent } from "./view/supplier/supplier-vault/supplier-approved-invoices/supplier-approved-invoices.component";
import { SupplierFinancedInvoicesComponent } from "./view/supplier/supplier-vault/supplier-financed-invoices/supplier-financed-invoices.component";
import { SupplierVaultComponent } from "./view/supplier/supplier-vault/supplier-vault.component";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideAccountSettingsComponent } from './view/buyer/side-account-settings/side-account-settings.component';
import { SuppliernavComponent } from './shared/suppliernav/suppliernav.component';
import { SupplierDashComponent } from './view/supplier/supplier-dash/supplier-dash.component';
import { PaymentInformationComponent } from './view/supplier/payment-information/payment-information.component';
import { BalanceComponent } from './view/supplier/balance/balance.component';
import { TransactionalHistoryComponent } from './view/supplier/transactional-history/transactional-history.component';


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
    ApproveInvoicesComponent,
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
    TransactionalHistoryComponent


  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2PageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
