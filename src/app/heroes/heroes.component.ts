import { Component, OnInit } from '@angular/core';
import { Hero} from '../hero';
import {HeroService} from '../hero.service';
 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],

})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  getHeroes(): void {
    // original
    // this.heroes = this.heroService.getHeroes(); 
    
    // Observable type
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  selectedHero?: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  
  constructor(private heroService : HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  
}
