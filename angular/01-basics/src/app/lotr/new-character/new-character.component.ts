import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/lotr.interface';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css'],
})
export class NewCharacterComponent {
  @Input('character') newCharacter: Character = { name: '', power: 0 };
  @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  constructor() {}

  add() {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }

    this.onNewCharacter.emit(this.newCharacter);

    this.newCharacter = {
      name: '',
      power: 0,
    };
  }
}
