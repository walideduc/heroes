import {Component} from 'angular2/core';
import {OnInit} from 'angualr2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {Router} from "angular2/router";


@Component({
    selector: 'my-heroes',
    templateUrl :'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
})
export class HeroesComponent implements OnInit{
    title = 'Tour of Heroes';
    selectedHero: Hero;

    constructor(
        private _heroService: HeroService,
        private _router : Router){}

    getHeroes(){
        //this.heroes = this._heroService.getHeroes();
        this._heroService.getHeroes().then(heroes => this.heroes = heroes)
    }
    ngOnInit(){
        this.getHeroes();
    }
    onSelect(hero: Hero){this.selectedHero = hero;}
    goToDetail(){
        let link = ['HeroDetail',{id:this.selectedHero.id}];
        this._router.navigate(link);
    }



}


