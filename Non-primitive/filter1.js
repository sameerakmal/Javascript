// Example 1: Filtering names with more than 5 characters
let arr = ["sachin", "saurav", "kohli", "dhoni", "yuvi"];

// Filter names whose length is greater than 5
let namesArray = arr.filter(name => name.length > 5);
console.log("Original Names:", arr);
console.log("Filtered Names (length > 5):", namesArray);


// Example 2: Filtering user objects based on age and gender
let users = [
    { userName: 'sachin', userAge: 51, gender: 'M' },
    { userName: 'dravid', userAge: 50, gender: 'M' },
    { userName: 'kohli', userAge: 38, gender: 'M' },
    { userName: 'rohith', userAge: 39, gender: 'M' },
    { userName: 'healy', userAge: 39, gender: 'f' },
    { userName: 'smrithmandan', userAge: 39, gender: 'f' }
];

// Filter users who are male and younger than 40
let usersFilteredData = users.filter(user => user.userAge < 40 && user.gender === 'M');
console.log("All Users:", users);
console.log("Filtered Users (M & age < 40):", usersFilteredData);


// Example 3: Filtering available items in a shopping cart
let cart = [
    { id: 1, name: 'Laptop', price: 50000, available: true },
    { id: 2, name: 'Mouse', price: 500, available: false },
    { id: 3, name: 'Keyboard', price: 1000, available: true },
    { id: 4, name: 'Monitor', price: 8000, available: false },
    { id: 5, name: 'USB Cable', price: 200, available: true }
];

// Get only available items from the cart
let availableItems = cart.filter(item => item.available === true);
console.log("Cart Items:", cart);
console.log("Available Items Only:", availableItems);