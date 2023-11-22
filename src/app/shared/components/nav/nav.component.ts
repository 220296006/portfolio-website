import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(private scrollService: ScrollService) {}
  
  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }

  }