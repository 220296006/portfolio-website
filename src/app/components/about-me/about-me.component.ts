import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  private prevScrollPosition = 0;

  constructor(private router: Router) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const scrollPosition = window.scrollY;
    const isScrollingDown = scrollPosition > this.prevScrollPosition;

    if (isScrollingDown && this.isScrollingDownToBottom(scrollPosition)) {
      this.router.navigate(['/resume']);
    } else if (!isScrollingDown && this.isScrollingUpToTop(scrollPosition)) {
      this.router.navigate(['/home']);
    }

    this.prevScrollPosition = scrollPosition;
  }

  private isScrollingDownToBottom(scrollPosition: number): boolean {
    return scrollPosition >= document.body.offsetHeight - window.innerHeight;
  }

  private isScrollingUpToTop(scrollPosition: number): boolean {
    return scrollPosition <= window.innerHeight;
  }

}
