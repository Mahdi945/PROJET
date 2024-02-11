import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  images: string[] = [ 'assets/01.jpeg', 'assets/02.jpeg','assets/03.jpg','assets/04.jpg','assets/05.jpg','assets/06.png','assets/07.PNG','assets/08.jpg','assets/09.GIF','assets/10.jpg','assets/11.jpg','assets/12.jpg'];
  currentIndex: number = 0;

  animateImages() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); 
  }
}

