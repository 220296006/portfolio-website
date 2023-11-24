import { HttpClientModule } from '@angular/common/http';
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
import { NavComponent } from './shared/components/nav/nav.component';
import { PharmacyappComponent } from './components/pharmacyapp/pharmacyapp.component';
import { TheebestprojectComponent } from './components/theebestproject/theebestproject.component';
import { RouterModule } from '@angular/router';
import { VpbankappComponent } from './components/vpbankapp/vpbankapp.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { ScrollService } from './shared/services/scroll.service';

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
    PharmacyappComponent,
    TheebestprojectComponent,
    VpbankappComponent,
    BackToTopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
