import { Component, OnInit } from '@angular/core';
import {Infirmiere} from '../../infirmiere';

import {Router} from '@angular/router';
import {InfirmiereService} from '../../shared_service/infirmiere.service';

@Component({
  selector: 'app-infirmiereform',
  templateUrl: './infirmiereform.component.html',
  styleUrls: ['./infirmiereform.component.css']
})
export class InfirmiereformComponent implements OnInit {

  private infirmiere:Infirmiere;
  constructor(private _infirmiereService:InfirmiereService, private _router:Router) { }

  ngOnInit() {
    this.infirmiere = this._infirmiereService.getter();
  }
  processForm(){
    if(this.infirmiere.id==undefined){
      this._infirmiereService.creatInfirmiere(this.infirmiere).subscribe((infirmiere)=>{
        console.log(infirmiere);
        this._router.navigate(['/inf']);
      },(error)=>{
        console.log(error);
      });
    }else {
      this._infirmiereService.updatInfirmiere(this.infirmiere).subscribe((infirmiere)=>{
        console.log(infirmiere);
        this._router.navigate(['/inf']);
      },(error)=>{
        console.log(error);
      });
    }
  }
}
