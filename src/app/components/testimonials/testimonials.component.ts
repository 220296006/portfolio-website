// testimonials.component.ts

import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  animations: [
    trigger('fade', [
      transition(':increment', [
        style({ opacity: 1 }),
        animate('500ms', style({ opacity: 0 })),
      ]),
      transition(':decrement', [
        style({ opacity: 1 }),
        animate('500ms', style({ opacity: 0 })),
      ]),
    ]),
    trigger('slide', [
      transition(':increment', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class TestimonialsComponent implements OnInit {
  testimonials: any[] = [
    {
      quote:
        'Mr Matsaba, is not only smart, hardworking and dedicated, but he proved that in his work also.',
      image: 'assets/images/Tiyani.jpeg',
      name: 'Tiyani Baloyi',
      designation:
        'Senior Software Engineer, South African Radio and Astronomy Observatory (SARAO)',
    },
    {
      quote:
        'Thabiso is a good programmer, great team-player and works well under pressure.',
      image: 'assets/images/Luvo.PNG',
      name: 'Luvo Ntshwela',
      designation: 'Junior Software Developer, Entelect',
    },
    {
      quote:
        'Without a doubt Thabiso is one of the talented programmers, trustworthy and professional. His advice has helped me to grow as well in the field.',
      image: 'assets/images/Vuyo.jpg',
      name: 'Vuyolwethu Mfidi',
      designation: 'Junior Software Developer, Uvu Africa:CapaCiti',
    },
  ];

  selectedIndex = 0;

  ngOnInit(): void {
    // Automatically switch testimonials every 5 seconds
    setInterval(() => this.nextTestimonial(), 5000);
  }

  selectTestimonial(index: number): void {
    this.selectedIndex = index;
  }

  nextTestimonial(): void {
    this.selectedIndex = (this.selectedIndex + 1) % this.testimonials.length;
  }
}
