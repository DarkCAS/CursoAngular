import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasPeliculas: any[] = [];
  loading: boolean;

  constructor(private pelis: PeliculasService) 
  {
   this.loading = true;
    this.pelis.getDiscoverMovies().subscribe((data: any) => {
        console.log(data);
        this.nuevasPeliculas = data;
        this.loading = false;
      });
    }

}
