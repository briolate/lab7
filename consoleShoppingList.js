var groceryItems = [
  {
    name: 'Mango',
    price: 2
  },
  {
    name: 'Milk',
    price: 3.99
  },
  {
    name: 'Bread',
    price: 4.99
  },
  {
    name: 'Beer',
    price: 12.99
  },
  {
    name: 'Scotch',
    price: 39.99
  },
  {
    name: 'Dom Perignon',
    price: 189.99
  }
];

var total = 0;
groceryItems.forEach(function(i){
  total += i.price;
  console.log(i.name);
});
console.log(total);
