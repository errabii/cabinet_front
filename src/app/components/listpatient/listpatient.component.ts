import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../shared_service/patient.service';
import {Patient} from '../../patient';

import {Router} from '@angular/router';

@Component({
  selector: 'app-listpatient',
  templateUrl: './listpatient.component.html',
  styleUrls: ['./listpatient.component.css']
})
export class ListpatientComponent implements OnInit {

  private patients:Patient[];
  constructor(private _patientService:PatientService, private _router:Router) { }

  ngOnInit() {
    this._patientService.getPatients().subscribe((patients)=>{
      console.log(patients);
      this.patients = patients;
    },(error)=>{
      console.log(error);
    })
  }
  deletePatient(patient){
    this._patientService.deletePatient(patient.id).subscribe((data)=>{
      this.patients.splice(this.patients.indexOf(patient),1);
    }, (error)=>{
      console.log(error);
    });
  }
  updatePatient(patient){
    this._patientService.setter(patient);
    this._router.navigate(['/pat1']);
  }
  newpatient(){
    let patient = new Patient();
    this._patientService.setter(patient);
    this._router.navigate(['/pat1']);
  }
}
