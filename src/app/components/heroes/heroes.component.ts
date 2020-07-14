import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HEROE } from '../../models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: HEROE[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes()
  }

}
