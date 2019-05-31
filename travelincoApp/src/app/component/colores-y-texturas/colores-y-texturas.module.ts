import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ColoresYTexturasPage } from './colores-y-texturas.page';

const routes: Routes = [
  {
    path: '',
    component: ColoresYTexturasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ColoresYTexturasPage]
})
export class ColoresYTexturasPageModule {}
