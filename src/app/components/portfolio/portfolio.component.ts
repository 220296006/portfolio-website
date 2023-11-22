import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  private prevScrollPosition = 0;

  constructor(private router: Router) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const scrollPosition = window.scrollY;
    const isScrollingDown = scrollPosition > this.prevScrollPosition;

    if (isScrollingDown && this.isScrollingDownToBottom(scrollPosition)) {
      this.router.navigate(['/contact']);
    } else if (!isScrollingDown && this.isScrollingUpToTop(scrollPosition)) {
      this.router.navigate(['/services']);
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
