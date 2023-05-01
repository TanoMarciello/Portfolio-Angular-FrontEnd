import { Component } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
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
