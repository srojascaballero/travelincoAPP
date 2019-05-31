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
  		this.places = places;
  	});
  }

}
