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
    // Implement your scroll logic here
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 300) {
      this.activateNavLink('/home');
      // Add other navigation link activations as needed
    }
  }

  activateNavLink(route: string): void {
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      if (currentRoute === route) {
        // Mark the navigation link as active here
      }
    });
  }

  isNavLinkActive(route: string): boolean {
    return this.router.url === route;
  }

  // Add other component logic here
  ngOnInit(): void {
  }

}
