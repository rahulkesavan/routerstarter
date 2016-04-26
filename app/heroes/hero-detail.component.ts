import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/heroes/hero-detail.component.html',
  styleUrls: ['app/heroes/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private _router:Router,
    private _routeParams:RouteParams,
    private _service:HeroService){}
  ngOnInit() {
    let id = this._routeParams.get('id');
    this._service.getHero(id).then(hero => this.hero = hero);
  }
  gotoHeroes() {
    // Like <a [routerLink]="['Heroes']">Heroes</a>
    this._router.navigate(['Heroes']);
  }
}
