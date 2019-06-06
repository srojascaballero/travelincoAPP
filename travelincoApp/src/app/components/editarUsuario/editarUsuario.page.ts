import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './editarUsuario.page.html',
  styleUrls: ['./editarUsuario.page.scss'],
})
export class EditarUsuarioPage implements OnInit {

  constructor( public authservice : AuthService ) { }

  ngOnInit() {
  }

  

}
