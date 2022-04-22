import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heroes: string[] = ['Spiderman', 'IronMan', 'Hawk', 'Thor'];
  deletedHero: string = '';

  deleteHero(): void {
    this.deletedHero = this.heroes.pop() ?? '';
  }
}
