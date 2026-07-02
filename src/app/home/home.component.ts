import { Component } from '@angular/core';

import { HeroComponent } from '../hero/hero.component';
import { ExperienceComponent } from '../experience/experience.component';
import { DestinationsComponent } from '../destinations/destinations.component';
import { PackagesComponent } from '../packages/packages.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { BookingComponent } from '../booking/booking.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { StatsComponent } from "../stats/stats.component";
@Component({
  selector: 'app-home',
  imports: [HeroComponent,
    ExperienceComponent,
    DestinationsComponent,
    PackagesComponent,
    GalleryComponent,
    // TestimonialsComponent,
    // BookingComponent,
    NewsletterComponent, StatsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
