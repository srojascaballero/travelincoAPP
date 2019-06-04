import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, Routes, RouterModule } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  
  public places : any = [];
  public favoritePlaces : Array<any> = [];

  constructor(public alertController: AlertController, router: Router, public placeservice : PlacesService) { }

  ngOnInit() {

    this.placeservice.getLugares().subscribe( places => {
      this.places = places;
      
      for (let index = 0; index < this.places.length; index++) {
        
       let value = localStorage.getItem(this.places[index].name);

       if(value!= null){
         this.favoritePlaces.push(this.places[index]);
       }
 
     }
  	});

   


  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Felicitaciones',
      subHeader: '',
      message: 'Has seleccionado la experiencia.',
      buttons: ['OK']
    });

    await alert.present();

  }

}
