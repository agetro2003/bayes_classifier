import express from 'express';
import cors from 'cors';
import natural from 'natural';
import data from "./classifier.json" assert { type: "json" };

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const categorizador = natural.BayesClassifier.restore(data);


app.post('/categorizar', (req, res) => {
    const {nombres} = req.body;
    let tag1 = [];
    nombres.forEach((nombre) => {
        const tag = categorizador.classify(nombre);
        tag1.push({nombre, tag});
    });
    res.json(tag1);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});