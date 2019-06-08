import { Component, OnInit } from '@angular/core';
import {Secretaire} from '../../secretaire';

import {Router} from '@angular/router';
import {SecretaireService} from '../../shared_service/secretaire.service';

@Component({
  selector: 'app-secretaireform',
  templateUrl: './secretaireform.component.html',
  styleUrls: ['./secretaireform.component.css']
})
export class SecretaireformComponent implements OnInit {

  private secretaire:Secretaire;
  constructor(private _secretaireService:SecretaireService, private _router:Router) { }

  ngOnInit() {
    this.secretaire = this._secretaireService.getter();
  }
  processForm(){
    if(this.secretaire.id==undefined){
      this._secretaireService.creatSecretaire(this.secretaire).subscribe((secretaire)=>{
        console.log(secretaire);
        this._router.navigate(['/sec']);
      },(error)=>{
        console.log(error);
      });
    }else {
      this._secretaireService.updatSecretaire(this.secretaire).subscribe((secretaire)=>{
        console.log(secretaire);
        this._router.navigate(['/sec']);
      },(error)=>{
        console.log(error);
      });
    }
  }
}
