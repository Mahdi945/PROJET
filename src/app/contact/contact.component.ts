import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 
  formSubmitted: boolean = false;
 
  nomSociete: string = '';
  telephone: string = '';
  email: string = '';
  adresseSociete: string = '';
  typeMachine: string = '';
  refMachine: string = '';
  descriptionPanne: string = '';
 

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit() {
    const formData = {
        nomSociete: this.nomSociete,
        telephone: this.telephone,
        email: this.email,
        adresseSociete: this.adresseSociete,
        typeMachine: this.typeMachine,
        refMachine: this.refMachine,
        descriptionPanne: this.descriptionPanne
    };

    // Mettez à jour l'URL pour correspondre à l'URL de votre backend Vercel
    this.http.post<any>('https://node-glqp-1c43k5bvo-mahdis-projects-ccd0dc12.vercel.app', formData)
      .subscribe(
        (response) => {
          console.log('Réponse du serveur:', response);
          this.formSubmitted = true;
          setTimeout(() => {
            this.formSubmitted = false;
            this.router.navigate(['/accueil']);
          }, 3000);
        },
        (error) => {
          console.log('Erreur du serveur:', error);
        }
      );
}}
