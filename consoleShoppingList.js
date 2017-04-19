//consoleShoppingList
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
  console.log(i.name + " = $" + i.price);
});
console.log("Total = $" + total.toFixed(2));

//Figure it Out
var lowEnd = -10;
var highEnd = 30;
var list = [];
for (var i = lowEnd; i <= highEnd; i++) {
    console.log(i);
}
