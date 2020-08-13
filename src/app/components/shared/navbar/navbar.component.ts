import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchHero(data: string) {
    console.log(data);
    this.router.navigate(['/search', data ]);
  }

  onSubmit(e: Event) {
    e.preventDefault();
  }
}