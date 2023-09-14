import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{

  constructor( private router: Router){
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY;

    // Adjust the scroll threshold as needed
    const scrollThreshold = 200;

    if (scrollPosition >= scrollThreshold) {
      // Add a class to the navigation bar when scrolling
      document.querySelector('.navbar')?.classList.add('scrolled');
    } else {
      // Remove the class when scrolling back to the top
      document.querySelector('.navbar')?.classList.remove('scrolled');
    }
  }

  // Add other component logic here
  ngOnInit(): void {
  }

}
