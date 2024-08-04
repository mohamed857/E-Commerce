import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';

export const routes: Routes = [
    {path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)},
    {path: 'login',loadComponent:()=> import('./account/login/login.component').then(c => c.LoginComponent)},
    {path: 'register',loadComponent:()=> import('./account/register/register.component').then(c => c.RegisterComponent)},
    {path: 'forget-password',loadComponent:()=> import('./account/forget-password/forget-password.component').then(c => c.ForgetPasswordComponent)},
    {path: '', pathMatch:'full', redirectTo: '/public'},
];
