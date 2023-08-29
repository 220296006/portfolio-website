import { EducationComponent } from './components/education/education.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './shared/nav/nav.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

const routes: Routes = [
  {path: '#', pathMatch: 'full', component:NavComponent},
  {path: 'home', pathMatch: 'full', component: HomeComponent},
  {path: 'education', pathMatch: 'full', component: EducationComponent},
  {path: 'about-me', pathMatch: 'full', component: AboutMeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
