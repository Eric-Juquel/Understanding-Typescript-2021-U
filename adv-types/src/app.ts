// Intersection Types //

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

// interface ElevatedEmployee extends Employee, Admin {}

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Type Guards //

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: 'Manu', startDate: new Date() });

class Car {
  drive() {
    console.log('Drving a Car ... ');
  }
}

class Truck {
  drive() {
    console.log('Drving a Truck ..');
  }

  loadCargo(amount: number) {
    console.log('Loading Cargo ...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions //
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving with speed: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

// Type Casting //

const paragraph = document.getElementById('message-output');

// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!
const userInputElement = document.getElementById(
  'user-input'
)! as HTMLInputElement;

userInputElement.value = 'Hi there!';

// Index Properties //

interface ErrorContainer {
  // {email: 'Not a valid email', username: 'Must start with a capital character!' }
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!',
};

// Function Overloads //

type Combinables = string | number;
type Numerics = number | boolean;

type Universals = Combinables & Numerics;

function addTo(a: number, b: number): number;
function addTo(a: string, b: string): string;
function addTo(a: Combinables, b: Combinables) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = addTo('Max', 'Schwarz');
result.split(' ');

// Optional Chaining //

interface JobData {
  title: string;
  description: string;
}

interface FetchUserData {
  id: string;
  name: string;
  job?: JobData;
}

const fetchUserData: FetchUserData = {
  id: 'u1',
  name: 'Max',
  // job: {title: 'CEO', description: 'My own company'}
};

console.log(fetchUserData?.job?.title);

// Nullish Coalescing //

const userInput = '';

const storeData = userInput ?? 'DEFAULT';

console.log(storeData);
