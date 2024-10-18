import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
temperaturaClimaMessage: string = '';

receivetemperaturaClimaMessage($event: string ) {
  this.temperaturaClimaMessage = $event;
}



 
  }

