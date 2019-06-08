import { Component, OnInit } from '@angular/core';

import {InfirmiereService} from '../../shared_service/infirmiere.service';
import {Infirmiere} from '../../infirmiere';

import {Router} from '@angular/router';

@Component({
  selector: 'app-listinfirmiere',
  templateUrl: './listinfirmiere.component.html',
  styleUrls: ['./listinfirmiere.component.css']
})
export class ListinfirmiereComponent implements OnInit {

  private infirmieres:Infirmiere[];
  constructor(private _infirmiereService:InfirmiereService, private _router:Router) { }

  ngOnInit() {
    this._infirmiereService.getInfirmieres().subscribe((infirmieres)=>{
      console.log(infirmieres);
      this.infirmieres = infirmieres;
    },(error)=>{
      console.log(error);
    })
  }
  deleteInfirmiere(infirmiere){
    this._infirmiereService.deleteInfirmiere(infirmiere.id).subscribe((data)=>{
      this.infirmieres.splice(this.infirmieres.indexOf(infirmiere),1);
    }, (error)=>{
      console.log(error);
    });
  }
  updateInfirmiere(infirmiere){
    this._infirmiereService.setter(infirmiere);
    this._router.navigate(['/inf1']);
  }
  newInfirmiere(){
    let infirmiere = new Infirmiere();
    this._infirmiereService.setter(infirmiere);
    this._router.navigate(['/inf1']);
  }
}

