import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
// import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
[x: string]: any;

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1200
  }

  agregarNuevoPersonaje( argumento: Personaje){
  // console.log('Main page component')
  // console.log( argumento)
  // debugger; // para hacer debug en el explorador
  // this.personajes.push(argumento);
  }
  constructor() {
  }

}
