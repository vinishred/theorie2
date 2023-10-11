// il existe des fonctions natives comme la fonction alert
alert("Fichier lié");
alert(1234);

// Debug
// console = objet JS natif
// log = fonction liée à mon objet
// c'est équivalent à:
// const console = {
//   log: "Ma fonction de log"
// }
console.log("Mon message dans la console");
console.warn("je suis un message d'avertissement");
console.error("je suis un message d'ereur");

// les fonctions s'écrivent camelCase avec des arguments entre parenthèses
// () = appeler une fonction "Lancer/exécuter"

// ecrire une fonction
// 1/ de manière ancienne
function addition() {
  // code qui appartient à ma fonction
}
// pour l'appeler
addition();

// 2/manière moderne avec le fat arrow
// en gros on dit que cette variable c'est ma fonction
const soustraction = () => {
  // code qui appartient à ma fonction
};
soustraction();

// Dire bonjour
const sayHello = (a, b) => {
  // console.log("Bonjour " + a + " " + b + " Bienvenue sur cette page !");
  // console.log("Bonjour", a, b, "Bienvenue sur cette page !");
  console.log(`Bonjour ${a} ${b} Bienvenue sur le site !`);
};
const firstName = "Vincent";
const lastName = "Callarec";
sayHello(firstName, lastName);
