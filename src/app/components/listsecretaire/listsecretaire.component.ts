import { Component, OnInit } from '@angular/core';

import {SecretaireService} from '../../shared_service/secretaire.service';
import {Secretaire} from '../../secretaire';

import {Router} from '@angular/router';

@Component({
  selector: 'app-listsecretaire',
  templateUrl: './listsecretaire.component.html',
  styleUrls: ['./listsecretaire.component.css']
})
export class ListsecretaireComponent implements OnInit {

  private secretaires:Secretaire[];
  constructor(private _secretaireService:SecretaireService, private _router:Router) { }

  ngOnInit() {
    this._secretaireService.getSecretaires().subscribe((secretaires)=>{
      console.log(secretaires);
      this.secretaires = secretaires;
    },(error)=>{
      console.log(error);
    })
  }
  deleteSecretaire(secretaire){
    this._secretaireService.deleteSecretaire(secretaire.id).subscribe((data)=>{
      this.secretaires.splice(this.secretaires.indexOf(secretaire),1);
    }, (error)=>{
      console.log(error);
    });
  }
  updateSecretaire(secretaire){
    this._secretaireService.setter(secretaire);
    this._router.navigate(['/sec1']);
  }
  newSecretaire(){
    let secretaire = new Secretaire();
    this._secretaireService.setter(secretaire);
    this._router.navigate(['/sec1']);
  }
}
