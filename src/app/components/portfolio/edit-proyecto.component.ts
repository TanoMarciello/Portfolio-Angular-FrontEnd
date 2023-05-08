import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio } from 'src/app/model/portfolio';
import { ImageService } from 'src/app/services/image.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent {
  portfolio:Portfolio = null;

  constructor(private activatedRouter: ActivatedRoute, private portfolioService: PortfolioService,
    private router: Router, public imageService:ImageService){}

ngOnInit(){
  const id = this.activatedRouter.snapshot.params['id'];
  this.portfolioService.detail(id).subscribe(data =>{
    this.portfolio = data;
  }, err => {
    alert("Error al modificar proyecto");
    this.router.navigate(['']);
  })
}

onUpdate(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.portfolio.imgP = this.imageService.url;
  this.portfolioService.update(id, this.portfolio).subscribe(
  data => {
    this.router.navigate(['']);
  }, err =>{
    alert("Error al modificar el proyecto");
    this.router.navigate(['']);
  }
  )
}

uploadImage($event:any){
  const id = this.activatedRouter.snapshot.params['id'];
  this.portfolio.imgP = this.imageService.url;
  const name = "proyecto_" + id;
  this.imageService.uploadImage($event, name);
}


}
