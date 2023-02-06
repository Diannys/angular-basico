import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Hulk', 'Iroman', 'Acuaman', 'Hitman'];
  heroeBorrado: string = '';
  borrarHeroe(){
    this.heroeBorrado  = this.heroes.shift() || '';
    // this.heroes = []; // asignar un array vacio para borrar
  }
}


