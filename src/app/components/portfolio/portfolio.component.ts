import { Component } from '@angular/core';
import { Portfolio } from 'src/app/model/portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolio: Portfolio[] = [];

  constructor(private sPortfolio: PortfolioService, private tokenService: TokenService){}

  isLogged = false;

  ngOnInit():void {
    this.cargarPortfolio();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarPortfolio():void {
    this.sPortfolio.lista().subscribe(
      data => {this.portfolio = data;}
    )
  }

  delete(id?:number){
    if(id != undefined){
      this.sPortfolio.delete(id).subscribe(
        data =>{
          this.cargarPortfolio();
        }, err =>{
          alert("No se pudo eliminar el proyecto");
        }
      )
    }
  }
}

