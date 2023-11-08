import { Component, ElementRef, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const typedElement = document.querySelector('.typed') as HTMLElement | null;

    if (typedElement) {
      const typedStringsAttribute = typedElement.getAttribute('data-typed-items') || '';
      const typedStrings = typedStringsAttribute.split(',');

      new Typed('.typed', {
        strings: typedStrings, // Pass the array of strings
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
      });
    }
  }

  scrollToAbout() {
    // Get a reference to the About section by its id
    const aboutSection = this.elementRef.nativeElement.querySelector('#about-me');

    // Scroll to the About section
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
}
