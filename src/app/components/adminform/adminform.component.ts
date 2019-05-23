import { Component, OnInit } from '@angular/core';
import {Admin} from '../../admin';

import {Router} from '@angular/router';
import {AdminService} from '../../shared_service/admin.service';

@Component({
  selector: 'app-adminform',
  templateUrl: './adminform.component.html',
  styleUrls: ['./adminform.component.css']
})
export class AdminformComponent implements OnInit {
  private admin:Admin;
  constructor(private _adminService:AdminService, private _router:Router) { }

  ngOnInit() {
    this.admin = this._adminService.getter();
  }
  processForm(){
    if(this.admin.id==undefined){
      this._adminService.creatAdmin(this.admin).subscribe((admin)=>{
        console.log(admin);
        this._router.navigate(['/']);
      },(error)=>{
        console.log(error);
      });
    }else {
      this._adminService.updatAdmin(this.admin).subscribe((admin)=>{
        console.log(admin);
        this._router.navigate(['/']);
      },(error)=>{
        console.log(error);
      });
    }
  }
}
