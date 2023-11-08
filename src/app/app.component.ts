import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // Smooth scroll to top when the button is clicked
    const backToTopButton = document.querySelector('.back-to-top-btn') as HTMLElement; // Typecast to HTMLElement
    backToTopButton?.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
      if (backToTopButton) {
        if (window.scrollY > 300) {
          backToTopButton.style.display = 'block';
        } else {
          backToTopButton.style.display = 'none';
        }
      }
    });
  }
}
