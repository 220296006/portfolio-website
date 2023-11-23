import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ServicesComponent } from './components/services/services.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { PharmacyappComponent } from './components/pharmacyapp/pharmacyapp.component';
import { TheebestprojectComponent } from './components/theebestproject/theebestproject.component';
import { VpbankappComponent } from './components/vpbankapp/vpbankapp.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'home', pathMatch: 'full', component: HomeComponent},
  {path: 'nav', pathMatch: 'full', component:NavComponent},
  {path: 'about-me', pathMatch: 'full', component: AboutMeComponent},
  {path: 'services', pathMatch: 'full', component: ServicesComponent},
  {path: 'resume', pathMatch: 'full', component: ResumeComponent},
  {path: 'contact', pathMatch: 'full', component: ContactComponent},
  {path: 'portfolio', pathMatch: 'full', component: PortfolioComponent},
  {path: 'portfolio-pharmacyapp', pathMatch: 'full', component: PharmacyappComponent},
  {path: 'portfolio-theebestproject', pathMatch: 'full', component: TheebestprojectComponent},
  {path: 'portfolio-vpbankapp', pathMatch: 'full', component: VpbankappComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
