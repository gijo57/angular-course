let skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
  firstName: string;
  hp: number;
  skills: string[];
  town?: string;
}

const character: Character = {
  firstName: 'Jim',
  hp: 100,
  skills: ['Bash', 'Counter', 'Healing']
};

character.town = 'Shushar';

console.table(character);
