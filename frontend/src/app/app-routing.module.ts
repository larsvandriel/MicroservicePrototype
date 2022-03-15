import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddressListComponent} from './address-list/address-list.component';
import {RouterModule, Routes} from '@angular/router';
import {AddressCreateComponent} from './address-create/address-create.component';
import {AddressDetailComponent} from './address-detail/address-detail.component';
import {AddressEditComponent} from './address-edit/address-edit.component';
import {PersonCreateComponent} from './person-create/person-create.component';
import {PersonEditComponent} from './person-edit/person-edit.component';
import {PersonListComponent} from './person-list/person-list.component';
import {PersonDetailComponent} from './person-detail/person-detail.component';

const routes: Routes = [
  { path: 'address', component: AddressListComponent},
  { path: 'address/create', component: AddressCreateComponent},
  { path: 'address/:id', component: AddressDetailComponent, pathMatch: 'full'},
  { path: 'address/:id/edit', component: AddressEditComponent, pathMatch: 'full'},
  { path: 'person', component: PersonListComponent},
  { path: 'person/create', component: PersonCreateComponent},
  { path: 'person/:id', component: PersonDetailComponent, pathMatch: 'full'},
  { path: 'person/:id/edit', component: PersonEditComponent, pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
