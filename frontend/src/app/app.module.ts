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
import { PersonListComponent } from './person-list/person-list.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonCreateComponent } from './person-create/person-create.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    AddressDetailComponent,
    AddressEditComponent,
    AddressCreateComponent,
    AddressListComponent,
    PersonListComponent,
    PersonEditComponent,
    PersonCreateComponent,
    PersonDetailComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
