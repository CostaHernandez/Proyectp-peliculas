import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { BuscarComponent } from './pages/buscar/buscar.component';


const routes:Routes=[

  
  
  {path: '', pathMatch:'full', redirectTo: '/home'},
  {path: '**', pathMatch:'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'buscar/:texto', component: BuscarComponent},
  {path: 'pelicula/:id', component: PeliculaComponent},
  
 
 
  
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
