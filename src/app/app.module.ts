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
import { SecretaireService } from './shared_service/secretaire.service';
import { InfirmiereService } from './shared_service/infirmiere.service';
import { PatientService } from './shared_service/patient.service';
import { ListsecretaireComponent } from './components/listsecretaire/listsecretaire.component';
import { SecretaireformComponent } from './components/secretaireform/secretaireform.component';
import { ListinfirmiereComponent } from './components/listinfirmiere/listinfirmiere.component';
import { InfirmiereformComponent } from './components/infirmiereform/infirmiereform.component';
import { ListpatientComponent } from './components/listpatient/listpatient.component';
import { PatientformComponent } from './components/patientform/patientform.component';

const appRoutes:Routes=[
  {path:'', component:ListadminComponent},
  {path:'op', component:AdminformComponent},
  {path:'sec', component:ListsecretaireComponent},
  {path:'sec1', component:SecretaireformComponent},
  {path:'inf', component:ListinfirmiereComponent},
  {path:'inf1', component:InfirmiereformComponent},
  {path:'pat', component:ListpatientComponent},
  {path:'pat1', component:PatientformComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListadminComponent,
    AdminformComponent,
    ListsecretaireComponent,
    SecretaireformComponent,
    ListinfirmiereComponent,
    InfirmiereformComponent,
    ListpatientComponent,
    PatientformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [AdminService,SecretaireService,InfirmiereService,PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
