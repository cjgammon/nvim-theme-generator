export default `
/**
 * Calculates the factorial of a number.
 * @param {number} n - The number to calculate the factorial for.
 * @returns {number} - The factorial of the input number.
 */
function factorial(n) {
  // Base case
  if (n <= 1) {
    return 1;
  }

  // Recursive case
  return n * factorial(n - 1);
}

// Example usage
const result = factorial(5);
console.log("Factorial of 5 is:", result);

// Working with arrays
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => {
  console.log(\`Fruit \${index + 1}: \${fruit}\`);
});

// Handling objects
const person = {
  name: "John Doe",
  age: 30,
  greet: function() {
    console.log(\`Hello, my name is \${this.name} and I am \${this.age} years old.\`);
  },
};

// Call the greet method
person.greet();

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(\`\${this.name} says \${this.sound}!\`);
  }
}

const dog = new Animal("Dog", "Woof");
dog.makeSound();

{{Error}}
[[Warning]]
||Hint||
((Info))
`;
