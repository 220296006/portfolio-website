import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 })),
      ]),
    ]),
    trigger('slide', [
      transition('* => *', [
        style({ transform: 'translateX({{ from }})' }),
        animate('500ms ease-in-out', style({ transform: 'translateX({{ to }})' })),
      ], { params: { from: '100%', to: '0%' } })
    ]),
  ],
})
export class TestimonialsComponent implements OnInit {
  testimonials: any[] = [
    {
      quote: "Without a doubt Thabiso is one of the talented programmers, trustworthy and professional. His advice has helped me to grow as well in the field.",
      image: "assets/images/Tiyani.jpeg",
      name: "Tiyani Baloyi",
      designation: "Senior Software Engineer, South African Radio and Astronomy Observatory (SARAO)"
    },    
    {
      quote: "Thabiso is a good programmer, great team-player and works well under pressure.",
      image: "assets/images/Luvo.PNG",
      name: "Luvo Ntshwela",
      designation: "Junior Software Developer, Entelect"
    },
    {
      quote: "Without a doubt Thabiso is one of the talented programmers, trustworthy and professional. His advice has helped me to grow as well in the field.",
      image: "assets/images/Vuyo.jpg",
      name: "Vuyolwethu Mfidi",
      designation: "Junior Software Developer, Uvu Africa:CapaCiti"
    },
  ];

  selectedIndex = 0;

  ngOnInit(): void {
    window.onload = () => {
      this.showTestimonial();

      // Switch to the next testimonial after 5 seconds
      setTimeout(() => this.nextTestimonial(), 5000);
    };
  }

  showTestimonial(): void {
    // Initially show the first testimonial at the center
    this.selectedIndex = 0;
  }

  selectTestimonial(index: number): void {
    this.selectedIndex = index;
  }

  nextTestimonial(): void {
    // Move to the next testimonial
    this.selectedIndex = (this.selectedIndex + 1) % this.testimonials.length;

    // Switch to the next testimonial after 5 seconds
    setTimeout(() => this.nextTestimonial(), 5000);
  }

  slide(from: number, to: number) {
    return {
      value: 0,
      params: { from, to }
    };
  }  
}
