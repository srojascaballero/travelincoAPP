import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


export interface place {
	name: string;
	description: string;
	id: string;
	img: string;
}
export interface test {
	name : string
	description:  string;
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
	
	test (sName: string, sDescrption: string){
		let testCollection = this.db.collection<test>('places');
		testCollection.add({name : sName, description : sDescrption})
	}


}
