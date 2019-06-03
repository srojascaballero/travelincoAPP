import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlacesService, place } from '../../services/places.service';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.page.html',
  styleUrls: ['./lugar.page.scss'],
})
export class LugarPage implements OnInit {

  public places : any = [];
  public comments : any = [];
  public id;
  namePlace;
  descriptionPlace;
  public completeDescription : any[];
  imgPlace;
  public commentImg;
  public avatarImg;

  constructor( public placeservice : PlacesService, private route: ActivatedRoute, public commentService : CommentsService ) { }

  ngOnInit() {
  	this.id = this.route.snapshot.paramMap.get('id');
  	this.placeservice.getLugares().subscribe( places => {
  		this.places = places;
  		this.places.forEach((element)=>{
  			if(element.id == this.id){
  				this.namePlace = element.name;
  				this.descriptionPlace = element.description
          this.imgPlace = element.img
          this.completeDescription = element.completeText
  			}
  		})
    });
    
    this.commentService.getComments().subscribe(comments =>{
      this.comments = comments;
      this.comments.forEach((element) => {
        this.commentImg = element.commentImg
        this.avatarImg = element.avatarImg
      })
    })

  }

  addtoFavorites(name : string){  
    console.log("Entered");
      let key = name;

      let value  = localStorage.getItem(key);
      if(value != undefined && value != null && value != '' && localStorage.length != 0){
        localStorage.setItem(key, this.id);
      }else if(localStorage.length == 0){
        localStorage.setItem(key, this.id);
      }
      else{
        localStorage.setItem(key, this.id);
      }

    

  }



}
