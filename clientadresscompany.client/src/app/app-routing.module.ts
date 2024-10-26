import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { AddressListComponent } from './components/address-list/address-list.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientListComponent } from './components/client-list/client-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'clients', component: ClientListComponent },
  { path: 'clients/create', component: ClientFormComponent },
  { path: 'clients/edit/:id', component: ClientFormComponent },
  { path: 'clients/:clientId/addresses', component: AddressListComponent },
  { path: 'clients/:clientId/addresses/create', component: AddressFormComponent },
  { path: 'clients/:clientId/addresses/edit/:addressId', component: AddressFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }