import { Injectable } from '@angular/core';

import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Secretaire} from '../secretaire';

import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class SecretaireService {

  private baseUrl:string = 'http://localhost:8081';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private secretaire:Secretaire;
  constructor(private _http:Http) { }

  getSecretaires(){
    return this._http.get(this.baseUrl+'/secretaire/all',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getSecretaire(id:Number){
    return this._http.get(this.baseUrl+'/secretaire/find/'+id,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deleteSecretaire(id:Number){
    return this._http.delete(this.baseUrl+'/secretaire/delete/'+id,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  creatSecretaire(secretaire:Secretaire){
    return this._http.post(this.baseUrl+'/secretaire/new', JSON.stringify(secretaire), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  updatSecretaire(secretaire:Secretaire){
    return this._http.put(this.baseUrl+'/secretaire/update', JSON.stringify(secretaire), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  errorHandler(){
    return Observable.throw(error || 'SERVER ERROR');
  }
  setter(secretaire:Secretaire){
    this.secretaire = secretaire;
  }
  getter(){
    return this.secretaire;
  }
}