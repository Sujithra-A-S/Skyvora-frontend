import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-popups',
  imports: [CommonModule, FormsModule],
  templateUrl: './register-popups.component.html',
  styleUrl: './register-popups.component.css'
})
export class RegisterPopupsComponent implements OnInit {
  showPopup = false;
  showSuccess = false;
  showError = false;

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

  ngOnInit() {
    setInterval(() => {
      this.showPopup = true;
    }, 30000);
  }

  closePopup() {
    this.showPopup = false;
  }

  submitForm() {
    const allFilled =
      this.formData.name &&
      this.formData.city &&
      this.formData.email &&
      this.formData.phone &&
      this.formData.whatsapp &&
      this.formData.destination &&
      this.formData.date &&
      this.formData.people ;

    if (!allFilled) {
      this.showError = true;
      setTimeout(() => this.showError = false, 3000);
      return;
    }

    this.http.post('https://skyvora-backend-production-0482.up.railway.app/enquiry', this.formData)
      .subscribe({
        next: () => {
          this.showPopup = false;
          this.showSuccess = true;

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

          setTimeout(() => this.showSuccess = false, 3000);
        },
        error: (err) => {
          console.log(err);
          alert('Something went wrong');
        }
      });
  }
}