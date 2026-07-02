import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  slides = [
    {
      image: 'assets/slide1.jpg',
      title1: 'Golden',
      title2: 'Sunsets',
      text: 'Sail the Mandovi River as the sky turns into a masterpiece.'
    },
    {
      image: 'assets/family1.jpg',
      title1: 'Jungle',
      title2: 'Adventures',
      text: 'Trek deep into the wild to witness spectacular waterfalls.'
    },
    {
      image: 'assets/slide3.jpg',
      title1: 'Beach',
      title2: 'Escape',
      text: 'Relax near the waves and enjoy your perfect holiday.'
    }
  ];
  currentSlide = 0;
  ngOnInit() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 3000);
  };
  scrollToNewsletter(){
    setTimeout(() =>{
    const section = document.getElementById('newsletter');
    if (section){
      section.scrollIntoView({
        behavior:'smooth',
        block : 'start'
      });
    }
  },100);
}
  scrollToExperience(){
    const section =document.getElementById('experience-section');
    if (section){
      section.scrollIntoView({
        behavior:'smooth',
        block: 'start'
      })
    }

  }

}
