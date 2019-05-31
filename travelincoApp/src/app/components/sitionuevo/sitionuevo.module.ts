import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SitionuevoPage } from './sitionuevo.page';

const routes: Routes = [
  {
    path: '',
    component: SitionuevoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SitionuevoPage]
})
export class SitionuevoPageModule {}
