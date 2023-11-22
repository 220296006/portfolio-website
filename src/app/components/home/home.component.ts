import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('scrollToTopElement') scrollToTopElement: ElementRef;

 
 ngOnInit(): void {
    const typedElement = document.querySelector('.typed') as HTMLElement | null;
    if (typedElement) {
      const typedStringsAttribute = typedElement.getAttribute('data-typed-items') || '';
      const typedStrings = typedStringsAttribute.split(',');

      new Typed('.typed', {
        strings: typedStrings, 
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
      });
    }
  }

  // private lastScrollPosition = 0;

  // constructor(private router: Router) {}

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: any): void {
  //   const scrollPosition = window.scrollY;
  //   const isScrollingDown = scrollPosition > this.lastScrollPosition;

  //   if (isScrollingDown && this.isScrollingDownToBottom(scrollPosition)) {
  //     // Scroll to the hidden element in the next component
  //     this.scrollToTopElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  //     this.router.navigate(['/about-me']);
  //   }

  //   this.lastScrollPosition = scrollPosition;
  // }

  // private isScrollingDownToBottom(scrollPosition: number): boolean {
  //   return scrollPosition >= document.body.offsetHeight - window.innerHeight;
  // }
}
