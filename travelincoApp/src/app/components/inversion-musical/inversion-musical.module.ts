import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { InversionMusicalPage } from './inversion-musical.page';

const routes: Routes = [
  {
    path: '',
    component: InversionMusicalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InversionMusicalPage]
})

export class InversionMusicalPageModule {

  constructor() { }

  ngOnInit() {
  }

}
