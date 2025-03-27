import natural from "natural";
import data from "./classifier.json" assert { type: "json" };

let tag1 = [];  
const categorizador = natural.BayesClassifier.restore(data)
const nombres = [
    "Cerveza",
    "jeans de mujer",
    "entrada infantil",
    "pantalon de hombre XXL",
    "camiseta verano",
    "pasta bolognesa",
    "pasta carbonara",
    "pizza 4 quesos",
    "cocacola",
    "televisor de 32 pulgadas",
    "jabon de manos",
    "detergente lavadora",
    "papel higienico doble hoja",
    "cereales corn flakes",
]

nombres.forEach((nombre) => {
    const tag = categorizador.classify(nombre);
    tag1.push({nombre, tag});

});

console.log(tag1);