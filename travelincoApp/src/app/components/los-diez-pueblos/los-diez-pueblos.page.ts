import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-los-diez-pueblos',
  templateUrl: './los-diez-pueblos.page.html',
  styleUrls: ['./los-diez-pueblos.page.scss'],
})
export class LosDiezPueblosPage implements OnInit {

  public places : any = [];

  constructor(public placeservice : PlacesService) { }

  ngOnInit() {

    this.placeservice.getLugares().subscribe( places => {
      console.log("ID? " + JSON.stringify(places));
  		this.places = places;
  	});

  }

  addtoFavorites(name : string, id : string){  
    
      let key = name;

      let value  = localStorage.getItem(key);
      if(value != undefined && value != null && value != '' && localStorage.length != 0){
        localStorage.setItem(key, id);
      }else if(localStorage.length == 0){
        localStorage.setItem(key, id);
      }
      else{
        localStorage.setItem(key, id);
      }
  }

}
