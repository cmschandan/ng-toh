import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const heroes = [
      {id: 12, name: 'Dr. Strange'},
      {id: 13, name: 'Iron Man'},
      {id: 14, name: 'Loki'},
      {id: 15, name: 'The Thor'},
      {id: 16, name: 'Black Widow'},
      {id: 17, name: 'Black Panther'},
      {id: 18, name: 'Groot'},
      {id: 19, name: 'Captain America'},
      {id: 20, name: 'Captain Marvel'},
    ];
    return {heroes};
  }


  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 :11;
  }
}
