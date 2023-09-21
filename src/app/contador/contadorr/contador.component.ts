import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
  <div style="text-align: center; background-color: aqua;">
<h1 style="text-align: center;">Bienvenido a {{title}}</h1>

<button (click)="acumular(-base)"> - {{base}}</button>
<span>{{numero}}</span>
<button (click)="acumular(base)"> + {{base}}</button>
</div>
  `


})
export class ContadorComponent {
    //  public title:string  = 'Contador App';
    title: string = 'Contador App';
    numero: number = 10;
    base: number = 5;

   

    acumular(valor: number) {
        this.numero += valor;

    }

}