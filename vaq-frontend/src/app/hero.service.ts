import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero.model';
import { HEROES } from './mock-heroes'

@Injectable({
  providedIn: 'root'
})
export class HeroService {


getHeroes(): Observable<Hero[]> {

  const heroesLocal = of(HEROES);

  return heroesLocal; //return da variável local

}







}
