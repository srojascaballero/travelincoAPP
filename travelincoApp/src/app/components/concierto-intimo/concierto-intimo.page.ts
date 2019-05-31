import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concierto-intimo',
  templateUrl: './concierto-intimo.page.html',
  styleUrls: ['./concierto-intimo.page.scss'],
})
export class ConciertoIntimoPage implements OnInit {

  date = '';
  hour = '';

  constructor() { }

  ngOnInit() {
  }

}
