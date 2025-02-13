import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';  // Home Component
import { AboutComponent } from './components/header/about.component';  // About Component

const routes: Routes = [
  { path: '', component: LandingComponent },  // Default route (Home)
  { path: 'home', component: LandingComponent },  // Home route
  { path: 'about', component: AboutComponent },  // About route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
