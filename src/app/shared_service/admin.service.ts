import { Injectable } from '@angular/core';

import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Admin} from '../admin';

import { error } from 'util';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl:string = 'http://localhost:8081';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private admin:Admin;
  constructor(private _http:Http) { }

  getAdmins(){
    return this._http.get(this.baseUrl+'/admin/all',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getAdmin(id:Number){
    return this._http.get(this.baseUrl+'/admin/find/'+id,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deleteAdmin(id:Number){
    return this._http.delete(this.baseUrl+'/admin/delete/'+id,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  creatAdmin(admin:Admin){
    return this._http.post(this.baseUrl+'/admin/new', JSON.stringify(admin), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  updatAdmin(admin:Admin){
    return this._http.put(this.baseUrl+'/admin/update', JSON.stringify(admin), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  errorHandler(){
    return Observable.throw(error || 'SERVER ERROR');
  }
  setter(admin:Admin){
    this.admin = admin;
  }
  getter(){
    return this.admin;
  }
}