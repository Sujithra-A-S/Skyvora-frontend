import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink,Router,RouterLinkActive} from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink,FormsModule,CommonModule,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {}
goToNewsletter() {
  this.router.navigate(['/']).then(() => {
    setTimeout(() =>{
  const section = document.getElementById('newsletter');
  if (section){
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}, 300);
});
}

isMenuOpen = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}
closeMenu() {
  this.isMenuOpen = false;
}
}


