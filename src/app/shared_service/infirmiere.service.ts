import { Injectable } from '@angular/core';

import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Infirmiere} from '../infirmiere';

import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class InfirmiereService {

  private baseUrl:string = 'http://localhost:8081';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private infirmiere:Infirmiere;
  constructor(private _http:Http) { }

  getInfirmieres(){
    return this._http.get(this.baseUrl+'/infirmiere/all',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getInfirmiere(id:Number){
    return this._http.get(this.baseUrl+'/infirmiere/find/'+id,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deleteInfirmiere(id:Number){
    return this._http.delete(this.baseUrl+'/infirmiere/delete/'+id,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  creatInfirmiere(infirmiere:Infirmiere){
    return this._http.post(this.baseUrl+'/infirmiere/new', JSON.stringify(infirmiere), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  updatInfirmiere(infirmiere:Infirmiere){
    return this._http.put(this.baseUrl+'/infirmiere/update', JSON.stringify(infirmiere), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  errorHandler(){
    return Observable.throw(error || 'SERVER ERROR');
  }
  setter(infirmiere:Infirmiere){
    this.infirmiere = infirmiere;
  }
  getter(){
    return this.infirmiere;
  }
}
