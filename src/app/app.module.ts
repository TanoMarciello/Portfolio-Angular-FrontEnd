import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoComponent } from './components/info/info.component';
import { ExperienciaComponent } from './components/formacion/experiencia/experiencia.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './services/interceptor-service';
import { NewExperienciaComponent } from './components/formacion/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/formacion/experiencia/edit-experiencia.component';
import { EducacionComponent } from './components/formacion/educacion/educacion.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { NewEducacionComponent } from './components/formacion/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/formacion/educacion/edit-educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,  
    NavbarComponent,
    InfoComponent,
    ExperienciaComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactoComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    FormacionComponent,
    NewEducacionComponent,
    EditEducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
