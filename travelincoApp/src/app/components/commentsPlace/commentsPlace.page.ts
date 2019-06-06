import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-CommentsPlace',
  templateUrl: './commentsPlace.page.html',
  styleUrls: ['./commentsPlace.page.scss'],
})
export class CommentsPlace implements OnInit {
    public comments : any = [];
public id;
  constructor(public commentService : CommentsService, private route: ActivatedRoute ) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    this.commentService.getComments().subscribe(comments =>{
        this.comments = comments;
     
      })

  }





}
