// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Eric",
//   age: 50,
//   hobbies: ["Sports", " Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

enum Role {
  ADMIN ,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Eric",
  age: 50,
  hobbies: ["Sports", " Cooking"],
  role: Role.ADMIN,
};

let favoritActivities: string[];
favoritActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
