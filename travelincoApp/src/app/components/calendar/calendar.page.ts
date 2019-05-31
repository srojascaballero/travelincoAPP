import { Component, OnInit } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  public date = '';
  public hour = '';
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
