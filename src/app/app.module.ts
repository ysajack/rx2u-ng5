import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RequestPickupComponent } from './components/request-pickup/request-pickup.component';
import { OrderStatusComponent } from './components/order-status/order-status.component';

import { InitialDataService } from './services/initial-data.service';
import { OrderInfoComponent } from './components/request-pickup/order-info/order-info.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ProxyComponent } from './components/request-pickup/proxy/proxy.component';
import { PlaceOrderComponent } from './components/request-pickup/place-order/place-order.component';
import { UsersComponent } from './components/users/users.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'rxpickup', component: RequestPickupComponent},
  {path: 'orderstatus', component: OrderStatusComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'users', component: UsersComponent},
  {path: 'rxpickup/proxy', component: ProxyComponent},
  {path: 'rxpickup/proxy/placeorder', component: PlaceOrderComponent},
  {path: 'rxpickup/proxy/placeorder/orderinfo', component: OrderInfoComponent},
  ];

@NgModule({
  declarations: [
    AppComponent,
    RequestPickupComponent,
    OrderStatusComponent,
    OrderInfoComponent,
    AboutComponent,
    HomeComponent,
    ProxyComponent,
    PlaceOrderComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [InitialDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
