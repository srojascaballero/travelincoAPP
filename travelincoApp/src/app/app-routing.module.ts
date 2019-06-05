import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard'; 



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'login', loadChildren: './components/login/login.module#LoginPageModule', canActivate : [NologinGuard]},
  { path: 'usuario', loadChildren: './components/usuario/usuario.module#UsuarioPageModule', canActivate : [AuthGuard]},
  { path: 'lugares', loadChildren: './components/lugares/lugares.module#LugaresPageModule' },
  { path: 'lugares/:id', loadChildren: './components/lugar/lugar.module#LugarPageModule' },
  { path: 'filtros', loadChildren: './components/filtros/filtros.module#FiltrosPageModule' },
  { path: 'favoritos', loadChildren: './components/favoritos/favoritos.module#FavoritosPageModule', canActivate : [AuthGuard] },
  { path: 'inversion-musical', loadChildren: './components/inversion-musical/inversion-musical.module#InversionMusicalPageModule' },
  { path: 'select-experience', loadChildren: './components/select-experience/select-experience.module#SelectExperiencePageModule' },
  { path: 'colores-y-texturas', loadChildren: './component/colores-y-texturas/colores-y-texturas.module#ColoresYTexturasPageModule' },
  { path: 'el-arte-en-tu-piel', loadChildren: './components/el-arte-en-tu-piel/el-arte-en-tu-piel.module#ElArteEnTuPielPageModule' },
  { path: 'concierto-intimo', loadChildren: './components/concierto-intimo/concierto-intimo.module#ConciertoIntimoPageModule' },
  { path: 'tour-estoraques', loadChildren: './components/tour-estoraques/tour-estoraques.module#TourEstoraquesPageModule' },
  { path: 'paramo-oceta', loadChildren: './component/paramo-oceta/paramo-oceta.module#ParamoOcetaPageModule' },
  { path: 'canon-del-chicamocha', loadChildren: './components/canon-del-chicamocha/canon-del-chicamocha.module#CanonDelChicamochaPageModule' },
  { path: 'pago', loadChildren: './components/pago/pago.module#PagoPageModule' },
  { path: 'friend', loadChildren: './component/friend/friend.module#FriendPageModule' },
  { path: 'credit-card', loadChildren: './components/credit-card/credit-card.module#CreditCardPageModule' },
  { path: 'user-menu', loadChildren: './components/user-menu/user-menu.module#UserMenuPageModule' },
  { path: 'price-filter', loadChildren: './components/price-filter/price-filter.module#PriceFilterPageModule' },
  { path: 'calendar', loadChildren: './components/calendar/calendar.module#CalendarPageModule' },
  { path: 'map', loadChildren: './components/map/map.module#MapPageModule' },
  { path: 'experiencias', loadChildren: './components/experiencias/experiencias.module#ExperienciasPageModule' },
  { path: 'articulos', loadChildren: './components/articulos/articulos.module#ArticulosPageModule' },
  { path: 'surf', loadChildren: './components/surf/surf.module#SurfPageModule' },
  { path: 'los-diez-pueblos', loadChildren: './components/los-diez-pueblos/los-diez-pueblos.module#LosDiezPueblosPageModule' },
  { path: 'sitionuevo', loadChildren: './components/sitionuevo/sitionuevo.module#SitionuevoPageModule' },
  { path: 'select-account', loadChildren: './components/select-account/select-account.module#SelectAccountPageModule' },
  {path: 'agregaExperiencia/:id', loadChildren: './components/experiencia/experiencia.module#ExperienciaPageModule'},
  {path: 'comentarioLugar', loadChildren: './components/commentsPlace/commentsPlace.module#CommentsPlaceModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
