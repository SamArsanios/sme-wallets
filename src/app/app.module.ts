import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { SupplierDashboardComponent } from './view/supplier/supplier-dashboard/supplier-dashboard.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideAccountSettingsComponent } from './view/buyer/side-account-settings/side-account-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BuyersDashboardComponent,
    PaymentnoticeComponent,
    BuyernavComponent,
    PaymentInfoComponent,
    SupplierDashboardComponent,
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
    SideAccountSettingsComponent

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
export class AppModule { }
