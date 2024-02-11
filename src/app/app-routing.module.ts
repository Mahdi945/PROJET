import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import {  AccueilComponent } from './accueil/accueil.component';
import {  ServicesComponent } from './services/services.component';



const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'entreprise', component: EntrepriseComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

