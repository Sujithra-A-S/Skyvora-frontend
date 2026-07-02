import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  imports: [FormsModule,CommonModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
showMessage = false;
onSubmit() {
  this.showMessage = true;

  setTimeout(() => {
    this.showMessage = false;
  }, 3000);
}
}
