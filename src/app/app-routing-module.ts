import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MotorcycleDetailComponent } from './motorcycles/motorcycle-detail/motorcycle-detail.component';
import { MotorcycleEditComponent } from './motorcycles/motorcycle-edit/motorcycle-edit.component';
import { MotorcycleStartComponent } from './motorcycles/motorcycle-start/motorcycle-start.component';
import { MotorcyclesComponent } from './motorcycles/motorcycles.component';
import { PriceListComponent } from './price-list/price-list.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/motorcycles', pathMatch: 'full'},
    {path: 'motorcycles', component: MotorcyclesComponent, children: [
    {path: '', component: MotorcycleStartComponent},
    {path: 'new', component: MotorcycleEditComponent},
    {path: ':id', component: MotorcycleDetailComponent},  
    {path: ':id/edit', component: MotorcycleEditComponent} ]},
    { path: 'price-list', component: PriceListComponent},
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    { path: '**', redirectTo: '/not-found' }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}