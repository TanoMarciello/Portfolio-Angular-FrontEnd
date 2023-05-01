import { Component } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  persona:persona = null;

  constructor(public personaService:PersonaService, private tokenService: TokenService){}
  isLogged = false;

  ngOnInit(){
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  cargarPersona(){
    this.personaService.detail(1).subscribe(data =>
      {
        this.persona = data;
      })
  }
  
}
