import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewNetworkComponent } from './new-network/new-network.component';
import { EditNetworkComponent } from './edit-network/edit-network.component';
import { AllNetworksComponent } from './all-networks/all-networks.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    NewNetworkComponent,
    EditNetworkComponent,
    AllNetworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
