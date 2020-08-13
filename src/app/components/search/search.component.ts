import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params.data;
      this.heroes = this.heroesService.searchHero(params.data);
      console.log(this.heroes);
    });
  }
    showHero(idx: number) {
      this.router.navigate(['/hero', idx]);
    }

}
