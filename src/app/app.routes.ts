import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { PackagesComponent } from './packages/packages.component';
import { PackagesDetailsComponent } from './packages-details/packages-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ExperienceComponent } from './experience/experience.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { DomesticPackagesComponent } from './domestic-packages/domestic-packages.component';
import { InternationalPackagesComponent } from './international-packages/international-packages.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'package-details', component: PackagesDetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'domestic-packages', component: DomesticPackagesComponent },
  { path: 'international-packages', component: InternationalPackagesComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-and-condition', component: TermsAndConditionComponent },

];