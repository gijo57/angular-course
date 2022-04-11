function sum(a: number, b: number): number {
  return a + b;
}

const sumArrow = (a: number, b: number): number => {
  return a + b;
};

function multiply(
  number: number,
  otherNumber?: number,
  base: number = 2
): number {
  return number * base;
}

interface Character2 {
  name: string;
  hp: number;
  showHp: () => void;
}

function heal(character: Character2, addHp: number): void {
  character.hp += addHp;
}

const player1: Character2 = {
  name: 'Bob',
  hp: 34,
  showHp() {
    console.log('Health: ' + this.hp);
  }
};

heal(player1, 35);
player1.showHp();
