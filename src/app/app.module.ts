import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponenet } from './Header/header.component';
import { MotorcyclesComponent } from './motorcycles/motorcycles.component';
import { MotorcycleListComponent } from './motorcycles/motorcycle-list/motorcycle-list.component';
import { AppRoutingModule } from './app-routing-module';
import { MotorcycleItemComponent } from './motorcycles/motorcycle-list/motorcycle-item/motorcycle-item.component';
import { MotorcycleEditComponent } from './motorcycles/motorcycle-edit/motorcycle-edit.component';
import { MotorcycleDetailComponent } from './motorcycles/motorcycle-detail/motorcycle-detail.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { MotorcycleStartComponent } from './motorcycles/motorcycle-start/motorcycle-start.component';
import { PriceListComponent } from './price-list/price-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponenet,
    MotorcyclesComponent,
    MotorcycleListComponent,
    MotorcycleItemComponent,
    MotorcycleEditComponent,
    MotorcycleDetailComponent,
    DropDownDirective,
    MotorcycleStartComponent,
    PriceListComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
