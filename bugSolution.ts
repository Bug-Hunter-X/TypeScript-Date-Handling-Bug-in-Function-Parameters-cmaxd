function greet(person: string, date: Date): string {
  // Create a copy to avoid modifying the original Date object
  const currentDate = new Date(date);
  console.log(person, currentDate);
  return `Hello, ${person}, today is ${currentDate.toDateString()}`;
}

let message = greet("Alice", new Date());
console.log(message);