import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadminComponent } from './components/listadmin/listadmin.component';
import { AdminformComponent } from './components/adminform/adminform.component';
import { AdminService } from './shared_service/admin.service';

const appRoutes:Routes=[
  {path:'', component:ListadminComponent},
  {path:'op', component:AdminformComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListadminComponent,
    AdminformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
