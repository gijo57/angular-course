class NormalPerson {
  constructor(public name: string, public address: string) {}
}

class Hero extends NormalPerson {
  // public alterEgo: string;
  // public age: number;
  // public realName: string;

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    super(realName, 'New York, USA');
  }
}

const ironMan = new Hero('IronMan', 35, 'Tony Stark');
console.log(ironMan);
