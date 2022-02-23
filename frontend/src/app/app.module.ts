import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddressDetailComponent } from './address-detail/address-detail.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressCreateComponent } from './address-create/address-create.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddressDetailComponent,
    AddressEditComponent,
    AddressCreateComponent,
    AddressListComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
