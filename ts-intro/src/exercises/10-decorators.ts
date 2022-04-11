function myDecorator(constructorFunction: Function) {
  constructorFunction.prototype.isSuper = true;
}

@myDecorator
class MySuperClass {
  public myProperty: string = 'ABC';

  print() {
    console.log('Hello world');
  }
}
