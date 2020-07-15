import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { HEROE } from '../../models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: HEROE[] = [];

  constructor(private heroesService: HeroesService,
    private router: Router) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes()
  }

  showHero(idx: number) {
    this.router.navigate(['/hero', idx])
  }

}
