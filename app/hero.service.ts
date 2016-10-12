import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  constructor( private location: Location ) { }

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    getHero(id: number): Promise<Hero> {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }
    goBack(): void {
      this.location.back();
    }
}
