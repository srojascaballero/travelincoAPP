import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';


@Component({
  selector: 'app-CommentsPlace',
  templateUrl: './CommentsPlace.page.html',
  styleUrls: ['./CommentsPlace.page.scss'],
})
export class CommentsPlace implements OnInit {
    public comments : any = [];

  constructor(public commentService : CommentsService ) { }

  ngOnInit() {

    this.commentService.getComments().subscribe(comments =>{
        this.comments = comments;
     
      })

  }





}
