import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlacesService, place } from '../../services/places.service';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.page.html',
  styleUrls: ['./lugar.page.scss'],
})
export class LugarPage implements OnInit {

  public places : any = [];

  id;
  namePlace;
  descriptionPlace;
  imgPlace;

  constructor( public placeservice : PlacesService, private route: ActivatedRoute ) { }

  ngOnInit() {
  	this.id = this.route.snapshot.paramMap.get('id');
  	this.placeservice.getLugares().subscribe( places => {
  		this.places = places;
  		this.places.forEach((element)=>{
  			if(element.id == this.id){
  				this.namePlace = element.name;
  				this.descriptionPlace = element.description
  				this.imgPlace = element.img
  			}
  		})
  	});
  }


}
