// Create a unique Symbol to be used as a key
let id = Symbol();

// Create a product object with different properties including a Symbol-keyed property
let product = {
    [id]: 10,               // Symbol as a key, value is 10
    'name': 'Samsung Tv',   // Regular string key
    'Price': 45000,         // Another string key
    size: 17                // Key without quotes (same as string key)
};

// Print the entire object to console
console.log(product);

// Loop through all enumerable string-keyed properties in the object
for (key of Object.keys(product)) {
    console.log(key); // Symbol keys won't appear here
}

// Access the value stored using the Symbol key
console.log(`product is dispatched with the order id ${product[id]}`);