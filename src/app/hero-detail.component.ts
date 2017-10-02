import { Component, Input } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label for="id">id: </label>{{hero.id}}</div>
    </div>
    <label for="name">name:  </label>
    <input [(ngModel)]="hero.name" placeholder="name">
  `
})
export class HeroDetailComponent {
  // tslint:disable-next-line:semicolon
  @Input() hero: Hero
}
