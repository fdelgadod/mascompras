import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from "@angular/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  categoriaList : any;
  buscarTerminos : any;

  constructor(public navCtrl: NavController, public http: Http) {

  }
  ionViewDidLoad(){
   this.getData();
  }
  getData(){
    this.http.get("http://localhost/apiNew/json.php").subscribe( data =>{
      this.categoriaList = JSON.parse(data["_body"]);
    }, err =>{
      console.log(err);
    });
  }

}
