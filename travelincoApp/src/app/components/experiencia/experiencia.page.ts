import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.page.html',
  styleUrls: ['./experiencia.page.scss'],
})
export class ExperienciaPage implements OnInit {

    title: string;
    photo: string;
    description : string;
    id : string;

  constructor(public commentService : CommentsService, private route: ActivatedRoute , public alertController: AlertController ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  
  }


    addExperience(){
        // this.commentService.saveComment("https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-512.png", this.title, this.description, this.photo, this.id );
        this.presentAlert();
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
