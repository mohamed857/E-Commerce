import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from "./public.component";
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '',
    component: PublicComponent,
    children:[
      { path: 'home', component: HomeComponent},
      { path: 'product', component: ProductsComponent},
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/public/home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
