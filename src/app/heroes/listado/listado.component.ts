import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
heroes: string[]=['Thor','Casper','Obama','Joe Biden','PerroSancheeh','Abascal Españita']
heroeBorrado:string =''
borrarHeroe(){
//this.heroes=[];
//this.heroeBorrado = this.heroes.shift() || ''; //borrar primero
this.heroeBorrado = this.heroes.pop() || '';

}
}
