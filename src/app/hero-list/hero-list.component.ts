import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/finally';

import { HeroService }      from '../hero.service';
import { Hero }      from '../data-model';


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Observable<Hero[]>;
  selectedHero: Hero;
  isLoading: Boolean = false;

  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.isLoading = true;
    this.heroes = this.heroService.getHeroes().finally(() => this.isLoading = false);
  }

  select(hero:Hero) {
    this.selectedHero = hero;
  }

}
