import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculasImg'
})
export class PeliculasImgPipe implements PipeTransform {

  transform(pelicula: any): any {
    let url = "http://image.thdb,irg/t/p/w400";
    if (pelicula.poster_path)
    {
      return url + pelicula.poster_path;
    }
    else
    {
      if (pelicula.backdrop_path)
      {
        return url + pelicula.backdrop_path;
      }else{
        return "assets/img/noimage.png";
      }
    }
  }

}
