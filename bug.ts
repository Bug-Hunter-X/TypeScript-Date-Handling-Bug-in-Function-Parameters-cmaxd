function greet(person: string, date: Date): string {
  console.log(person, date);
  return `Hello, ${person}, today is ${date.toDateString()}`;
}

let message = greet("Alice", new Date());
console.log(message);