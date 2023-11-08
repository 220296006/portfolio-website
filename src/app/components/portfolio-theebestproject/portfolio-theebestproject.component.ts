import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-portfolio-theebestproject',
  templateUrl: './portfolio-theebestproject.component.html',
  styleUrls: ['./portfolio-theebestproject.component.scss']
})
export class PortfolioTheebestprojectComponent implements OnInit, AfterViewInit {
 
  constructor() { }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.portfolio-details-slider swiper', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  }

  ngOnInit(): void {
    // Your component initialization code here
  }
}