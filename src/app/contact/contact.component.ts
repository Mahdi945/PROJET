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

    this.http.post<any>('http://localhost:3000/submitForm/ajout', formData)
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