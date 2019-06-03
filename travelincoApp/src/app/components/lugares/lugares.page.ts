import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PlacesService, place } from '../../services/places.service';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})


export class LugaresPage implements OnInit {

  public places : any = [];
  public recommendedPlaces : Array<any>[] = [];
  public fav : any = [];

  constructor( public placeservice : PlacesService, public alertController: AlertController, private menu: MenuController ) { 
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  ngOnInit() {
  	this.placeservice.getLugares().subscribe( places => {
      // console.log("All Places: "+ JSON.stringify(places));
      this.places = places;  
      this.createRecommendedPlacesList(places);
    });
    
    // this.placeservice.test("this name is a test", "This is also a test");

  }

  createRecommendedPlacesList(placesList : any){
  
   for (let index = 0; index < placesList.length; index++) {
     
    if(placesList[index].recommended == true){
      
      this.recommendedPlaces.push(placesList[index]);
    }
   }
   console.log("Recommended: "+ this.recommendedPlaces);
  }

}
