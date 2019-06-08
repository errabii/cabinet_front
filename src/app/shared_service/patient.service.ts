import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Patient} from '../patient';

import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl:string = 'http://localhost:8081';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private patient:Patient;
  constructor(private _http:Http) { }

  getPatients(){
    return this._http.get(this.baseUrl+'/patient/all',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getPatient(id:Number){
    return this._http.get(this.baseUrl+'/patient/find/'+id,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deletePatient(id:Number){
    return this._http.delete(this.baseUrl+'/patient/delete/'+id,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  creatPatient(patient:Patient){
    return this._http.post(this.baseUrl+'/patient/new', JSON.stringify(patient), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  updatPatient(patient:Patient){
    return this._http.put(this.baseUrl+'/patient/update', JSON.stringify(patient), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  errorHandler(){
    return Observable.throw(error || 'SERVER ERROR');
  }
  setter(patient:Patient){
    this.patient = patient;
  }
  getter(){
    return this.patient;
  }
}
