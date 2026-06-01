/*Online store - Alvas Marked*/

const products = [
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Headphones", price: 150, category: "electronics" },
  { name: "Coffee Maker", price: 100, category: "home appliances" },
  { name: "Blender", price: 250, category: "home appliances" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "T-shirt", price: 50, category: "clothing" },
  { name: "Sneakers", price: 300, category: "clothing" },
];

/* Oppgave 1* Bruker FILTER for å sjekke om item pricen er mindre enn cash */
const cash = 200;
const affordableItems = products.filter((item) => item.price <= cash);
console.log(`Med 200kr kan eg kjøpe disse`, affordableItems);

/* Oppgave 2* Bruker MAP for å lage et nytt array  productNames   */
const productNames = products.map((product) => `${product.name}`);
console.log(`Navnet på produktene er `, productNames);

/* Oppgave 3*  Bruker Filter for category for å sjekke hver objcet i  array om categorien inneholder "electronics"*/

const categoryType = products.filter(
  (product) => product.category === "electronics",
);

console.log(`Disse har categorien Electronics`, categoryType);

/* Oppgave 4* Bruker SOME for å ha en boolean for product price koster 1000 eller meir */
const aboveTresh = products.some((product) => product.price >= 1000);
console.log(aboveTresh);

/* Oppgave 5* Bruker REDUCE for å combinere 1 og 2 så 3,4  heilt til arrayen er tom og gir meg en total sum av pricen*/
const priceTotal = products.reduce(
  (acc, currenValue) => acc + currenValue.price,
  0,
);
console.log(`Total prisen på alle produktene er ${priceTotal}`);
