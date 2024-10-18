import {  Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() temperaturaClimaEvent = new EventEmitter<string>();

  temperatura: number = 0;  


//Metodo que decide si la temperatura esta templada, caliente, o extremadamente caliente
checkTemperatura(){
  let message='';

  if(this.temperatura <= 15){
    message=`Frio (TEMPERATURA: ${this.temperatura})`;
  }
  else if(this.temperatura>15 && this.temperatura<=25){
    message=`Templado (TEMPERATURA: ${this.temperatura})`;
  }
  else if(this.temperatura>25 && this.temperatura <= 32){
    message=`Calor (TEMPERATURA: ${this.temperatura})`;
  }
  else {
    message=`Calor extremo (TEMPERATURA: ${this.temperatura})`;
  
}

this.temperaturaClimaEvent.emit(message);

}
}
