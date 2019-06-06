import { Component, OnInit } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-arte',
  templateUrl: './arte.page.html',
  styleUrls: ['./arte.page.scss'],
})
export class ArtePage implements OnInit {

  public experiences: any = [];

  constructor(public alertController: AlertController, router: Router, public expService: ExperienceService) { }

  ngOnInit() {
    this.expService.getExperiences().subscribe(response => {
      console.log("Experiences: "+ JSON.stringify(response));
      this.experiences = response;
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
