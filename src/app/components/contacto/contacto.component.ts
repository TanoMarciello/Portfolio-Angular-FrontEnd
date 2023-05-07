import { Component } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  persona:persona = null;

  constructor(public personaService:PersonaService){}

  ngOnInit(){
    this.cargarPersona();

  }
  cargarPersona(){
    this.personaService.detail(1).subscribe(data =>
      {
        this.persona = data;
      })
  }
}
