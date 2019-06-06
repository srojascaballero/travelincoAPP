import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PlacesService } from 'src/app/services/places.service';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
    selector: 'app-experiencia-detalle',
    templateUrl: './experienciaDetalle.page.html',
    styleUrls: ['./experienciaDetalle.page.scss'],
})
export class ExperienciaDetallePage implements OnInit {

    public experiences: any = [];
    public myExperienceArray: any = [];
    public needToBringSomethingArray: any = [];
    public whatToOffer: any = [];
    public languages: any = [];
    public id;
    nameExp;
    descriptionExp;
    public flagByob: boolean;
    public flagOffer: boolean;
    imgExp;
    imgOwner;
    ownerName;

    expPlace;
    expPrice;


    constructor(public alertController: AlertController, private route: ActivatedRoute, public placeservice: PlacesService, public expService: ExperienceService) { }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.expService.getExperiences().subscribe(response => {
            this.experiences = response;
            console.log("REsponse: " + JSON.stringify(response))
            this.experiences.forEach((element) => {
                if(element.id == this.id){
                this.nameExp = element.name
                this.expPlace = element.placeName
                this.expPrice = element.price
                this.descriptionExp = element.description
                this.imgExp = element.img
                this.imgOwner = element.ownerAvatar
                this.ownerName = element.owner
                this.myExperienceArray = element.myExperience
                this.needToBringSomethingArray = element.BYOB
                this.whatToOffer = element.wantSomething
                this.languages = element.Languages
                }
                
            })

            if (this.whatToOffer[0] == null)
                this.flagOffer = true;

            if (this.needToBringSomethingArray[0] == null)
                this.flagByob = true;

        })
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
