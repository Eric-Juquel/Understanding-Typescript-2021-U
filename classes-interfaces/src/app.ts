interface Named {
  readonly name: string;
  outputName?:string //optiional property
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name: string, public age: number) {}

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name + ' ' + this.age + ' years old');
  }
}

let user1: Greetable;

user1 = new Person('Max', 30);

user1.greet('Hi there - I am ');
console.log(user1);

///Function///
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};
