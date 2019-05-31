import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surf',
  templateUrl: './surf.page.html',
  styleUrls: ['./surf.page.scss'],
})
export class SurfPage implements OnInit {

  public date = '';
  public hour = '';

  constructor() { }

  ngOnInit() {
  }

}
