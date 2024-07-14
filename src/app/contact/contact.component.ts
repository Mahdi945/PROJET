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

    if (!this.validateEmail(this.email)) {
      console.log('Adresse e-mail invalide.');
      return;
    }

    if (!this.validatePhoneNumber(this.telephone)) {
      console.log('Numéro de téléphone invalide.');
      return;
    }

    this.http.post<any>('https://node-glqp.vercel.app/submitForm/ajout', formData)
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
  }

  private validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return email.match(emailPattern) ? true : false;
  }

  private validatePhoneNumber(phoneNumber: string): boolean {
    const phonePattern = /^[0-9]+$/;
    return phoneNumber.match(phonePattern) ? true : false;
  }
}