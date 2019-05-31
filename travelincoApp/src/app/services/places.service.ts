import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


export interface place {
	name: string;
	description: string;
	id: string;
	img: string;
}


@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor( private db : AngularFirestore ) { }

  getLugares(){
  	return this.db.collection('places').snapshotChanges().pipe(map(places =>{
  		return places.map(a=>{
  			const data = a.payload.doc.data() as place;
  			data.id = a.payload.doc.id;
        	return data;
        	console.log(data);
  		})
  	}))
  }


}
