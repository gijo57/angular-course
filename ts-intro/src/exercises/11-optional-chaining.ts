interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: 'Bob'
};

const passenger2: Passenger = {
  name: 'Alice',
  children: ['Kent', 'Chad', 'Rhett']
};

const printChildren = (passenger: Passenger): void {
  const numChildren = passenger.children?.length ?? 0;
  console.log(numChildren);
}

printChildren(passenger1);
printChildren(passenger2);
