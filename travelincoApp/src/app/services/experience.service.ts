import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';




export interface experience {
    img : string;
	name: string;
	description: string;
	placeID: string;
    commentImg: string;
    owner: string;
    ownerAvatar : string;
}





@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor( private db : AngularFirestore ) { }


    getExperiences(){

        return this.db.collection('experience').snapshotChanges().pipe(map(exp =>{
            return exp.map(result =>{
                const data = result.payload.doc.data() as experience
                return data;
            })
        }))

        // return this.db.collection('comments').snapshotChanges().pipe(map(comments =>{
        //     return comments.map(result =>{
        //         const data = result.payload.doc.data() as comment
        //         return data;
        //     })
        // }))

    }

    // saveComment(userImg: string, name : string, description : string, image : string, id : string){
    //     let commentsCollection = this.db.collection<comment>('comments');
    //     commentsCollection.add({ avatarImg : userImg, commentName : name, commentDescription : description, commentImg : image, placeID : id })
    // }


//   getLugares(){
//   	return this.db.collection('places').snapshotChanges().pipe(map(places =>{
//   		return places.map(a=>{
//   			const data = a.payload.doc.data() as place;
//   			data.id = a.payload.doc.id;
//         	return data;
//         	console.log(data);
//   		})
//   	}))
// 	}
	


}
