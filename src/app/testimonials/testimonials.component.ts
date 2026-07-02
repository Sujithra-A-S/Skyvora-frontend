// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-testimonials',
//   imports: [],
//   templateUrl: './testimonials.component.html',
//   styleUrl: './testimonials.component.css'
// })
// export class TestimonialsComponent {

// }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements OnInit {

  currentIndex = 0;

  testimonials = [
    {
      name: 'Albert Baby',
      text: 'Very good service and full time supportive. They made our trip unforgettable.'
    },
    {
      name: 'Anandhu S',
      text: 'Excellent arrangements. Hotel, transport and guides were perfect.'
    },
    {
      name: 'Rahul',
      text: 'Highly recommended. Worth every rupee spent.'
    }
  ];

  ngOnInit() {
    setInterval(() => {
      this.currentIndex =
        (this.currentIndex + 1) % this.testimonials.length;
    }, 3000);
  }
}