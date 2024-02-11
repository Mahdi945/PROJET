import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 
  formSubmitted: boolean = false;
 
  nomSociete: string = '';
  NumOuEmail: string = '';
  typeMachine: string = '';
  refMachine: string = '';
  DescriptionPanne: string = '';
  photoPanne: string = '';


  constructor(private http: HttpClient) { }

  onSubmit(formData: {
    nomSociete: string,
    NumOuEmail: string,
    typeMachine: string,
    refMachine: string,
    DescriptionPanne: string,
    photoPanne: File  // Utilisez le type File pour les fichiers
  }) {
    console.log('Data before sending:', formData);
  
    const formDataToSend = new FormData();
    formDataToSend.append('nomSociete', formData.nomSociete);
    formDataToSend.append('NumOuEmail', formData.NumOuEmail);
    formDataToSend.append('typeMachine', formData.typeMachine);
    formDataToSend.append('refMachine', formData.refMachine);
    formDataToSend.append('DescriptionPanne', formData.DescriptionPanne);
    formDataToSend.append('photoPanne', formData.photoPanne);
  
    this.http.post<any>('http://localhost:3000/sendEmail', formDataToSend)
      .subscribe(
        (response) => {
          console.log('Response from server:', response);
          this.formSubmitted = true;
          setTimeout(() => {
            this.formSubmitted = false;
          }, 4000);
        },
        (error) => {
          console.log('Error from server:', error);
        }
      );
  }
}  