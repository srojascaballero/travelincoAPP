import { Component, OnInit } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.page.html',
  styleUrls: ['./articulos.page.scss'],
})
export class ArticulosPage implements OnInit {

  constructor(public alertController: AlertController, router: Router) { }

  ngOnInit() {
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
