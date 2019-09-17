import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';



@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent {

   // pelicula: any;
   peliculas: any []= [];

   loadingPelicula: boolean;
   constructor(private pelis: PeliculasService) 
  {
    this.pelis.getKidsMovies().subscribe((data: any) => {
        console.log(data);
        this.peliculas = data;
      });
    }
}
