import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SymptomsComponent } from './components/symptoms/symptoms.component';
import { RealTimeDataComponent } from './components/real-time-data/real-time-data.component';
import { Symptoms2Component } from './components/symptoms2/symptoms2.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoComponent } from './components/info/info.component';
import { CareComponent } from './components/care/care.component';


const routes: Routes = [
  {
    path: 'logIn', component: LoginComponent
  },
  {
    path: 'signUp', component: RegistroComponent
  },
  {
    path: 'send', component: SendEmailComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    
  },
  {

    path: 'symptoms',
    component: SymptomsComponent,
    canActivate: [AuthGuard]
  },
  {

    path: 'symptoms2',
    component: Symptoms2Component,
    canActivate: [AuthGuard]
  },
  {
    path: 'real-time-data',
    component: RealTimeDataComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'care',
    component: CareComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'welcome'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
