import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

  


//Components

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { AuthService } from './services/auth.service';
import { environment } from 'src/environments/environment';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SymptomsComponent } from './components/symptoms/symptoms.component';
import { RealTimeDataComponent } from './components/real-time-data/real-time-data.component';
import { Symptoms2Component } from './components/symptoms2/symptoms2.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoComponent } from './components/info/info.component';
import { CareComponent } from './components/care/care.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    SendEmailComponent,
    WelcomeComponent,
    SymptomsComponent,
    RealTimeDataComponent,
    Symptoms2Component,
    FooterComponent,
    InfoComponent,
    CareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
