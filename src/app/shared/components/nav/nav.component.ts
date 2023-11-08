import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isSticky: boolean = false;

    // Implement your scroll logic here
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const scrollPosition = window.scrollY;
  
      if (scrollPosition >= 100) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    }

  // Add other component logic here
  }