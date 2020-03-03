import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewNetworkComponent } from './new-network/new-network.component';
import { EditNetworkComponent } from './edit-network/edit-network.component';
import { AllNetworksComponent } from './all-networks/all-networks.component';


const routes: Routes = [
  {
    path: 'edit/:id',
    component: EditNetworkComponent
  },
  {
    path: 'new',
    component: NewNetworkComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: AllNetworksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }