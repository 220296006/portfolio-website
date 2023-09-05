import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

const typed = document.querySelector('.typed') as HTMLElement | null;

if (typed) {
  let typed_strings = typed.getAttribute('data-typed-items') || '';
  typed_strings = typed_strings.split(',');

  new typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}

  ngOnInit(): void {
   
  }

}
