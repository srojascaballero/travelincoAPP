import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditarUsuarioPage } from './editarUsuario.page';

const routes: Routes = [
  {
    path: '',
    component: EditarUsuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditarUsuarioPage]
})
export class EditarUsuarioPageModule {}
