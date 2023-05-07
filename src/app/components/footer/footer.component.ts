import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isLogged = false;

  constructor(private router: Router, private tokenService: TokenService, 
              public personaService:PersonaService){}
  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }


  login(){
    this.router.navigate(['login']);
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
  persona:persona = null;

  cargarPersona(){
    this.personaService.detail(1).subscribe(data =>
      {
        this.persona = data;
      })
  }
}
