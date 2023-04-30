import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent {
  nombreEd: string = '';
  descripcionEd: string = '';
  periodoEd: string = '';
  ubicacionEd: string = '';
  webEd: string = '';

  constructor(private sEducacion:EducacionService, private router:Router) {}

  onCreate():void{
    const edu = new Educacion(this.nombreEd, this.descripcionEd, this.periodoEd, this.ubicacionEd, this.webEd);
    this.sEducacion.save(edu).subscribe(data =>{
      alert("Educacion añadida");
      this.router.navigate(['']);
    }, err =>{
      alert("No se pudo agregar educacion");
      this.router.navigate(['']);
    })
  }
}
