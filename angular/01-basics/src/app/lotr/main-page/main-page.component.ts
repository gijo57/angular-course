import { Component } from '@angular/core';
import { Character } from '../interfaces/lotr.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  characters: Character[] = [
    {
      name: 'Bilbo',
      power: 20,
    },
    {
      name: 'Frodo',
      power: 24,
    },
  ];

  newCharacter: Character = { name: 'Gandalf', power: 99 };
  constructor() {}

  addNewCharacter(character: Character) {
    this.characters.push(character);
  }
}
