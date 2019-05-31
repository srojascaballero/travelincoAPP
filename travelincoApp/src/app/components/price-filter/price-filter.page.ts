import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.page.html',
  styleUrls: ['./price-filter.page.scss'],
})
export class PriceFilterPage implements OnInit {

  constructor(public alertController: AlertController) { }

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
