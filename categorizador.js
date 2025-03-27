import natural from "natural";
import data from "./dataset.json" assert { type: "json" };

//const {PorterStemmerEs} = natural;


const categorizador = new natural.BayesClassifier();


data.forEach((item) => {
    //const nombre = PorterStemmerEs.stem(item.nombre.toLowerCase());
    categorizador.addDocument(item.nombre, item.tag);
    });
categorizador.train();

//save the classifier as a json file
categorizador.save('classifier.json');
console.log('Classifier saved to classifier.json');

