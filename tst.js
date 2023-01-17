const arr = [
  {
    name: "Me",
    age: 20,
    type: {
      name: "male",
    },
  },
  {
    name: "shelby",
    age: 7,
    type: {
      name: "doggo",
    },
  },
  {
    name: "GOT",
    age: 33,
    type: {
      name: "female",
    },
  },
];

const test = arr.map((el) => ({
  name: el.name,
  age: el.age,
  type: el.type.name,
}));

console.log(test);
