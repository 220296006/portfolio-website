import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  // @ViewChild('scrollToTopElement') scrollToTopElement: ElementRef;

  // private lastScrollPosition = 0;

  // constructor(private router: Router) {}

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: any): void {
  //   const scrollPosition = window.scrollY;
  //   const isScrollingDown = scrollPosition > this.lastScrollPosition;

  //   if (isScrollingDown && this.isScrollingDownToBottom(scrollPosition)) {
  //     this.scrollToTopElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
  //     this.router.navigate(['/services']);
  //   } else if (!isScrollingDown && this.isScrollingUpToTop(scrollPosition)) {
  //     this.router.navigate(['/about-me']);
  //   }

  //   this.lastScrollPosition = scrollPosition;
  // }

  // private isScrollingDownToBottom(scrollPosition: number): boolean {
  //   return scrollPosition >= document.body.offsetHeight - window.innerHeight;
  // }

  // private isScrollingUpToTop(scrollPosition: number): boolean {
  //   return scrollPosition <= window.innerHeight;
  // }

}


