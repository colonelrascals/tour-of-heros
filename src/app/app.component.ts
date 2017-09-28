import { Component } from '@angular/core';

export class Hero {
  id: number
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <h1>Welcome Beasts</h1>
    <h2>{{hero.name}} details!</h2>
    <div>
      <label>ID: </label>{{hero.id}}
    </div>
    <div>
      <label>name: </label>
      <input [(ngModel)] = "hero.name" placeholder="name">
    </div>
  `
})

export class AppComponent {
  hero: Hero = {
    id: 1,
    name: 'Winderstorm'
  }
}
