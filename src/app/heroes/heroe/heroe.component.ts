import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
  //styleUrls: ['./app.component.css']

})
export class HeoreComponent {
  //creo la propiedad nombre
  nombre: string = 'Ironman';
  edad  : number = 45

  get nombreCapitalizado(): string {
      return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
      return this.nombre + ' - ' + this.edad;
      //return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(){
    this.nombre = "Manolo"
  }
  cambiarEdad(){
    console.log('Key!!!')
    this.edad= 44;
  }


}