import { Component, OnInit } from '@angular/core';
import {Patient} from '../../patient';

import {Router} from '@angular/router';
import {PatientService} from '../../shared_service/patient.service';

@Component({
  selector: 'app-patientform',
  templateUrl: './patientform.component.html',
  styleUrls: ['./patientform.component.css']
})
export class PatientformComponent implements OnInit {

  private patient:Patient;
  constructor(private _patientService:PatientService, private _router:Router) { }

  ngOnInit() {
    this.patient = this._patientService.getter();
  }
  processForm(){
    if(this.patient.id==undefined){
      this._patientService.creatPatient(this.patient).subscribe((patient)=>{
        console.log(patient);
        this._router.navigate(['/pat']);
      },(error)=>{
        console.log(error);
      });
    }else {
      this._patientService.updatPatient(this.patient).subscribe((patient)=>{
        console.log(patient);
        this._router.navigate(['/pat']);
      },(error)=>{
        console.log(error);
      });
    }
  }
}
