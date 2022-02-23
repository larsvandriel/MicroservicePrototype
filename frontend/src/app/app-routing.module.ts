import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddressListComponent} from './address-list/address-list.component';
import {RouterModule, Routes} from '@angular/router';
import {AddressCreateComponent} from './address-create/address-create.component';
import {AddressDetailComponent} from './address-detail/address-detail.component';
import {AddressEditComponent} from './address-edit/address-edit.component';

const routes: Routes = [
  { path: '', component: AddressListComponent},
  { path: 'create', component: AddressCreateComponent},
  { path: ':id', component: AddressDetailComponent, pathMatch: 'full'},
  { path: ':id/edit', component: AddressEditComponent, pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
