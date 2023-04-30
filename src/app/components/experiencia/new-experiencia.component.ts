import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent {
  nombreE: string = '';
  puestoE: string = '';
  descripcionE: string = '';
  periodoE: string = '';
  ubicacionE: string = '';
  webE: string = '';

  constructor(private sExperiencia:SExperienciaService, private router:Router) {}

  onCreate():void{
    const expe = new Experiencia(this.nombreE, this.puestoE, this.descripcionE, this.periodoE, this.ubicacionE, this.webE);
    this.sExperiencia.save(expe).subscribe(data =>{
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err =>{
      alert("No se pudo agregar experiencia");
      this.router.navigate(['']);
    })
  }
}
