import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchHero(data: string) {
    console.log(data)
  };

  onSubmit(e: Event) {
    e.preventDefault();
  }

}
