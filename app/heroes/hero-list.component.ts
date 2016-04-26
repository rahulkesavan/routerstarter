import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './hero';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes/heroes.component.html',
  styleUrls: ['app/heroes/heroes.component.css'],
  directives: [HeroDetailComponent]
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private _router: Router,
    private _service: HeroService) { }
  ngOnInit() {
    this._service.getHeroes().then(heroes => this.heroes = heroes)
  }
  onSelect(hero: Hero) {
    this._router.navigate( ['HeroDetail', { id: hero.id }] );
  }
}