interface Player {
  volume: number;
  second: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const player: Player = {
  volume: 40,
  second: 350,
  song: 'Song 2',
  details: {
    author: 'Blur',
    year: 2002
  }
};

const { volume, song, second, details } = player;
const { author } = details;

// console.log(`Current volume is: ${volume}`);
// console.log(`Current song is: ${song}`);
// console.log(`Current second is: ${second}`);
// console.log(`Current author is: ${author}`);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , trunks] = dbz;

console.log(`Character 1: ${dbz[1]}`);
console.log(`Character 2: ${dbz[2]}`);
console.log(`Character 3: ${trunks}`);
