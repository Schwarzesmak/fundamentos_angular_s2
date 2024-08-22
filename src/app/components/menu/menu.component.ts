import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
 rutas=[
  {
    nombre:'Contacto',
    destino: '/contacto'
  },
  {
    nombre:'Hola',
    destino: '/Hola'
  }
  {
    nombre:'notfound',
    destino: '/notfound'
  }
 ]
}
