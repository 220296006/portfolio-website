import { trigger, transition, style, animate, query, animateChild, group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  animations: [
    trigger('slide', [
      transition(':increment', [
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('500ms ease-in-out', style({ transform: 'translateX(0)' })),
          ]),
          query(':leave', [
            animate('500ms ease-in-out', style({ transform: 'translateX(-100%)' })),
          ]),
        ]),
        animateChild(),
      ]),
      transition(':decrement', [
        group([
          query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('500ms ease-in-out', style({ transform: 'translateX(0)' })),
          ]),
          query(':leave', [
            animate('500ms ease-in-out', style({ transform: 'translateX(100%)' })),
          ]),
        ]),
        animateChild(),
      ]),
    ]),
  ],
})
export class TestimonialsComponent implements OnInit {
  testimonials = [
    // Your testimonial data goes here
  ];

  selectedIndex = 0;

  ngOnInit(): void {
    // Set up your testimonial data
    // ...

    // You can also implement an automatic slider using setInterval
    setInterval(() => this.nextTestimonial(), 5000); // Change slide every 5 seconds
  }

  selectTestimonial(index: number): void {
    this.selectedIndex = index;
  }

  nextTestimonial(): void {
    this.selectedIndex = (this.selectedIndex + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    this.selectedIndex = (this.selectedIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  slide() {
    return {
      value: this.selectedIndex,
    };
  }
}
