import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/formacion/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/formacion/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/formacion/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/formacion/educacion/edit-educacion.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { EditPersonainfoComponent } from './components/info/edit-personainfo.component';
import { EditProyectoComponent } from './components/portfolio/edit-proyecto.component';
import { NewProyectoComponent } from './components/portfolio/new-proyecto.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NewEducacionComponent},
  {path:'editedu/:id', component: EditEducacionComponent},
  {path:'nuevaskill', component: NewSkillComponent},
  {path:'editskill/:id', component: EditSkillComponent},
  {path:'editPersona/:id', component: EditPersonainfoComponent},
  {path:'nuevoProyecto', component: NewProyectoComponent},
  {path:'editProyecto/:id', component: EditProyectoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
