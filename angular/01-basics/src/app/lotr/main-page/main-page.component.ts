import { Component, OnInit } from '@angular/core';

interface Character {
  name: string;
  power: number;
}

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

  newCharacter: Character = {
    name: '',
    power: 0,
  };

  constructor() {}

  add() {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }

    this.characters.push(this.newCharacter);
    this.newCharacter = {
      name: '',
      power: 0,
    };
  }
}
