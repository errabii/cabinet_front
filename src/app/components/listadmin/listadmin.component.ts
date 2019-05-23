import { Component, OnInit } from '@angular/core';

import {AdminService} from '../../shared_service/admin.service';
import {Admin} from '../../admin';

import {Router} from '@angular/router';

@Component({
  selector: 'app-listadmin',
  templateUrl: './listadmin.component.html',
  styleUrls: ['./listadmin.component.css']
})
export class ListadminComponent implements OnInit {
  private admins:Admin[];
  constructor(private _adminService:AdminService, private _router:Router) { }

  ngOnInit() {
    this._adminService.getAdmins().subscribe((admins)=>{
      console.log(admins);
      this.admins = admins;
    },(error)=>{
      console.log(error);
    })
  }
  deleteAdmin(admin){
    this._adminService.deleteAdmin(admin.id).subscribe((data)=>{
      this.admins.splice(this.admins.indexOf(admin),1);
    }, (error)=>{
      console.log(error);
    });
  }
  updateAdmin(admin){
    this._adminService.setter(admin);
    this._router.navigate(['/op']);
  }
  newAdmin(){
    let admin = new Admin();
    this._adminService.setter(admin);
    this._router.navigate(['/op']);
  }
}
