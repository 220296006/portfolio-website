import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  // @ViewChild('scrollToTopElement') scrollToTopElement: ElementRef;


  // private prevScrollPosition = 0;

  // constructor(private router: Router) {}

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: any): void {
  //   const scrollPosition = window.scrollY;
  //   const isScrollingDown = scrollPosition > this.prevScrollPosition;

  //   if (isScrollingDown && this.isScrollingDownToBottom(scrollPosition)) {
  //     this.router.navigate(['/contact']);
  //   } else if (!isScrollingDown && this.isScrollingUpToTop(scrollPosition)) {
  //     this.router.navigate(['/portfolio']);
  //   }

  //   this.prevScrollPosition = scrollPosition;
  // }

  // private isScrollingDownToBottom(scrollPosition: number): boolean {
  //   return scrollPosition >= document.body.offsetHeight - window.innerHeight;
  // }
  
  // private isScrollingUpToTop(scrollPosition: number): boolean {
  //   return scrollPosition <= window.innerHeight;
  // }

}
