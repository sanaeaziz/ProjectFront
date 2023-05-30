import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementsComponent } from './components/departements/departements.component';
import { AdminComponent } from './components/admin/admin.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'departements', component: DepartementsComponent },
  { path: 'admins', component: AdminComponent },
  { path: 'search/:keyword', component: DepartementsComponent },
  { path: 'search/:keyword', component: AdminComponent },
  { path: 'departements/:id', component: DepartementsComponent },
  { path: 'admins/:id', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
