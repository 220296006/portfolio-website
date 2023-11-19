import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './shared/components/login/login.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { PharmacyappComponent } from './components/pharmacyapp/pharmacyapp.component';
import { TheebestprojectComponent } from './components/theebestproject/theebestproject.component';
import { RouterModule } from '@angular/router';
import { VpbankappComponent } from './components/vpbankapp/vpbankapp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutMeComponent,
    ResumeComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    LoginComponent,
    PharmacyappComponent,
    TheebestprojectComponent,
    VpbankappComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
