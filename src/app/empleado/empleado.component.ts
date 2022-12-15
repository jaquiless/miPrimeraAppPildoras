import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aquí iria un empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre="Javi";

  apellido="Quiles";

  edad=28;

  //empresa="Píldoras Informáticas";

 /*
 getEdad(){
    return this.edad;
  }
  */

  

  constructor(){ }

  ngOnInit(): void {
  }
}
