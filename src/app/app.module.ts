import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

import { MaterialModule } from './app/material-module';
import { ChartsModule } from 'ng2-charts';
import { NavComponent } from './components/nav/nav.component';
import { DashComponent } from './components/dash/dash.component';

import { CardComponent } from './components/card/card.component';
import { ProductSalesChartComponent } from './components/charts/product-sales-chart/product-sales-chart.component';
import { SalesTrafficChartComponent } from './components/charts/sales-traffic-chart/sales-traffic-chart.component';
import { AnnualSalesChartComponent } from './components/charts/annual-sales-chart/annual-sales-chart.component';
import { StoreSessionsChartComponent } from './components/charts/store-sessions-chart/store-sessions-chart.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { MiniCardComponent } from './components/mini-card/mini-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent,
    CardComponent,
    ProductSalesChartComponent,
    SalesTrafficChartComponent,
    AnnualSalesChartComponent,
    StoreSessionsChartComponent,
    OrdersTableComponent,
    MiniCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
