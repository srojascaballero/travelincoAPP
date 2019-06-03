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
  		this.places = places;
  	});

  }

}
