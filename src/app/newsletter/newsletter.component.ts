import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newsletter',
  imports: [FormsModule, CommonModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent {
  submitted = false;
  successMessage = false;

  constructor(private http: HttpClient) {}

  formData = {
    name: '',
    city: '',
    email: '',
    phone: '',
    whatsapp: '',
    destination: '',
    date: '',
    people: ''
  };

  onSubmit() {
    this.submitted = true;

    if (
      !this.formData.name ||
      !this.formData.city ||
      !this.formData.email ||
      !this.formData.phone ||
      !this.formData.whatsapp ||
      !this.formData.destination ||
      !this.formData.date ||
      !this.formData.people 
    ) {
      return;
    }

    this.http.post('http://localhost:5000/enquiry', this.formData)
      .subscribe({
        next: () => {
          this.successMessage = true;
          this.submitted = false;

          this.formData = {
            name: '',
            city: '',
            email: '',
            phone: '',
            whatsapp: '',
            destination: '',
            date: '',
            people: ''
          };

          setTimeout(() => {
            this.successMessage = false;
          }, 3000);
        },
        error: (err) => {
          console.log(err);
          alert('Something went wrong');
        }
      });
  }
}