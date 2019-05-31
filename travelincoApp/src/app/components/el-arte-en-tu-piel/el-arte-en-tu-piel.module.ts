import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ElArteEnTuPielPage } from './el-arte-en-tu-piel.page';

const routes: Routes = [
  {
    path: '',
    component: ElArteEnTuPielPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ElArteEnTuPielPage]
})
export class ElArteEnTuPielPageModule {}
