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

/*Oppgave 1* Bruker FILTER for å sjekke om item pricen er mindre enn cash */
const cash = 200;
const affordableItems = products.filter((item) => item.price <= cash);
console.log(`Med 200kr kan eg kjøpe disse`, affordableItems);

/*Oppgave 2* Bruker MAP for å lage et nytt array av products   */
const productNames = products.map((product) => `${product.name}`);
console.log(`Navnet på produktene er `, productNames);

/*Oppgave 3*  Bruker filter for å filtrere ut product som har kategorien "Electronics" der etter gi meg alle produkt navne som har kategorien "Electronic" med map*/

const kategoryProducts = products
  .filter((product) => product.category === "electronics")
  .map((product) => `${product.name} har  kategorien electronics`);

console.log(kategoryProducts);

/*Oppgave 4* Bruker SOME / Boolean for å sjekke om prisen er 1000 eller meir */
const aboveTresh = products.some((product) => product.price >= 1000);
console.log(aboveTresh);

/*Oppgave 5* Bruker REDUCE for å combinere 1 og 2 så 3,4  heilt til arrayen er tom og gir meg en total sum av pricen*/
const priceTotal = products.reduce(
  (acc, currenValue) => acc + currenValue.price,
  0,
);
console.log(`Total prisen på alle produktene er ${priceTotal}`);
