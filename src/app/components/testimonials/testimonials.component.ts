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
      transition('0 => 1', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateX(0%)', opacity: 1 })),
      ]),
      transition('0 => -1', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateX(0%)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class TestimonialsComponent implements OnInit {
  testimonials: any[] = [
    {
      quote:
        'Thabiso consistently demonstrates diligence in his work. He fearlessly delves into new skills, constructing projects to enhance his capabilities. He is committed to solving challenges independently but also knows when to seek assistance. Thabiso\'s adaptability and collaborative nature make a valuable team player in the realm of software development.',
      image: 'assets/images/Tiyani.jpeg',
      name: 'Tiyani Baloyi',
      designation:
        'Junior Software Engineer, South African Radio and Astronomy Observatory (SARAO)',
    },
    {
      quote:
        'Thabiso is a hard worker, has a positive attitude, and shows a huge willingness to grow. He works well under pressure.',
      image: 'assets/images/Luvo.PNG',
      name: 'Luvo Ntshwela',
      designation: 'Junior Software Developer, Entelect',
    },
    {
      quote:
        'Without a doubt, Thabiso is one of the talented programmers, trustworthy, and professional. His advice has helped me grow in the field.',
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


  nextTestimonial(): void {
    const currentIndex = this.testimonials.findIndex((t) => t === this.testimonials[this.selectedIndex]);
    this.selectedIndex = (currentIndex + 1) % this.testimonials.length;
  }

}
