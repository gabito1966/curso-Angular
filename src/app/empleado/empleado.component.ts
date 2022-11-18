import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})

export class EmpleadoComponent implements OnInit {


  nombre = "Gabriel";
  apellido = "García";
  //private edad= 56;
  edad = 56;
  empresa = "Adidas";

  cambiaEmpresa(event:Event){
    this.empresa=(<HTMLInputElement>event.target).value;
  }

  /*getEdad(){
    return this.edad;
  }*/

 habilitacionCuadro= false;

 usuRegistrado=false;

 textoDeRegistro="No hay nadie registrado";

getRegistroUsuario(){
  this.usuRegistrado= false;
 }

setUsuarioRegistrado(event:Event){
  //alert("El usuario se acaba de registrar");
  
  if((<HTMLInputElement>event.target).value=="si"){
    this.textoDeRegistro="El usuario se acaba de registrar";
  }else{
    this.textoDeRegistro="No hay nadie registrado";
  }
 }



  constructor() {}
  ngOnInit(): void {
      
  }

}
