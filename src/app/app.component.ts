import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos';

  //Propiedades
  nombre = 'Leonardo';
  email = 'correo.generico@utsjr.edu.mx';
  aniosServicio = 22;
  activo = true;
  alumnos = [24, 25, 26];
  numero = 5;
  contador = 0;
  desactivarBoton = true;

  productos = [
    {
      id: 1,
      descripcion: 'Submarinos',
      precio: 25
    },
    {
      id: 2,
      descripcion: 'Choco Roles',
      precio: 20.50
    },
    {
      id: 3,
      descripcion: 'Rufles de queso',
      precio: 18
    },
  ];

  //Función que muestra si el profesor está activo o no
  estaActivo(){
    if(this.activo){
      return 'Empleado Activo';
    } else{
      return 'Empleado Inactivo';
    }
  }

  //Funcion que suma los alumnos del arreglo
  sumarAlumnos(){
    let suma = 0;
    for(let i = 0; i < this.alumnos.length; i++){
      suma += this.alumnos[i];
    }
    return suma;
  }

  //Función que incrementa el contador
  incrementarContador(){
    this.contador++;
  }

  //Función que decrementa el contador
  decrementarContador(){
    this.contador--;
  }

  //Función que cambia el valor de desactivarBoton
  cambiarValor(){
    if(this.desactivarBoton){
      this.desactivarBoton = false;
    }
  }
}
