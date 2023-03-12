import { Component } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  persona: persona = new persona("","","");

  constructor(public personaService: PersonaService){}
  ngOnInit() {
    this.personaService.getPersona().subscribe(data => {this.persona = data});
  } 
}
