import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BodyComponent } from './components/body/body.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DepartementsComponent } from './components/departements/departements.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SearchComponent } from './components/search/search.component';
import { AddBtnComponent } from './components/add-btn/add-btn.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DepartementAddEditComponent } from './components/departement-add-edit/departement-add-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminAddEditComponent } from './components/admin-add-edit/admin-add-edit.component';
import { SearchAdminComponent } from './components/search-admin/search-admin.component';
import { FormsModule } from '@angular/forms';
import { AddBtnAdminComponent } from './components/add-btn-admin/add-btn-admin.component';




@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DepartementsComponent,
    SearchComponent,
    AddBtnComponent,
    ConfirmDialogComponent,
    DepartementAddEditComponent,
    AdminComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    AdminAddEditComponent,
    SearchAdminComponent,
    AddBtnAdminComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatNativeDateModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
