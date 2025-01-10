// For Loop

for (let i = 0; i < 10; i++) {
    console.log(i);  
}

// For In

const numbers = [45, 4, 9, 16, 25];

for (let x in numbers) {
    console.log(numbers[x])
}

// For of
// Does not use [] when looping inside the array

const cars = ["BMW", "Volvo", "Mini", "Mercedes", "Nissan", "RR"];

for (let y of cars) {
  console.log(y)
}