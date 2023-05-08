import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio } from 'src/app/model/portfolio';
import { ImageService } from 'src/app/services/image.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent {
  nombreP: string = '';
  descripcionP: string = '';
  imgP: string = '';
  webP:string = '';


  constructor(private activatedRouter: ActivatedRoute, private portfolioService: PortfolioService,
    private router: Router, public imageService:ImageService){}



  onCreate():void{
    this.imgP = this.imageService.url;
    const port = new Portfolio(this.nombreP, this.descripcionP, this.imgP, this.webP);
    this.portfolioService.save(port).subscribe(data =>{
      alert("Proyecto añadido");
      this.router.navigate(['']);
    }, err =>{
      alert("No se pudo agregar el proyecto");
      this.router.navigate(['']);
    })
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    this.imgP = this.imageService.url;
    const name = "proyecto_" + id;
    this.imageService.uploadImage($event, name);
  }
}
