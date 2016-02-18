import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {OnInit} from "angular2/core";


@Component({
    selector : 'my-dashboard',
    templateUrl : 'dashboard.component.html',
})

export class DashboardComponent implements OnInit{
    heroes:Hero[] = [];
    constructor(private _heroService : HeroService){ }
    ngOnInit(){
        this._heroService.getHeroes().then(heroes=>this.heroes = heroes.slice(1,5));
    }
    goToDetail(hero:Hero){

    }


}