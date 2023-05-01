import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/services/image.service';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-personainfo',
  templateUrl: './edit-personainfo.component.html',
  styleUrls: ['./edit-personainfo.component.css']
})
export class EditPersonainfoComponent {
  persona: persona = null;

  constructor(private activatedRouter: ActivatedRoute, private personaService: PersonaService,
              private router: Router, public imageService:ImageService){}

  ngOnInit(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(data =>{
      this.persona = data;
    }, err => {
      alert("Error al modificar");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url;
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar la información");
         this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url;
    const name = "perfil_" + id;
    this.imageService.uploadImage($event, name);
  }
}
