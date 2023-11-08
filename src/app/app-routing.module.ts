import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ServicesComponent } from './components/services/services.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { PortfolioDetailsPharmacyappComponent } from './components/portfolio-details-pharmacyapp/portfolio-details-pharmacyapp.component';
import { PortfolioDetailsTheebestprojectComponent } from './components/portfolio-details-theebestproject/portfolio-details-theebestproject.component';

const routes: Routes = [
  {path: 'home', pathMatch: 'full', component: HomeComponent},
  {path: 'nav', pathMatch: 'full', component:NavComponent},
  {path: 'about-me', pathMatch: 'full', component: AboutMeComponent},
  {path: 'services', pathMatch: 'full', component: ServicesComponent},
  {path: 'resume', pathMatch: 'full', component: ResumeComponent},
  {path: 'contact', pathMatch: 'full', component: ContactComponent},
  {path: 'portfolio', pathMatch: 'full', component: PortfolioComponent},
  {path: 'portfolio-details-pharmacyapp', pathMatch: 'full', component: PortfolioDetailsPharmacyappComponent},
  {path: 'portfolio-details-thebestproject', pathMatch: 'full', component: PortfolioDetailsTheebestprojectComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
