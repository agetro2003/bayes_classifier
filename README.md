﻿# bayes_classifier

Para ejecutar la aplicacion localmente
* Instalar dependencias
  ```
  npm i
  ```
* Ejecutar aplicacion
  ```
  node app.js
  ```
* Direccion por defecto del servidor local
  https://localhost:3000

* Para hacer una peticion se debe realizar un POST a
  https://localhost:3000/categorizar
  Enviando un body con una estructura como la del siguiente ejemplo:
  ```
{
  
  "nombres": [
    "pasta",
    "jeans de mujer",
    "entreda infantil",
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
    "cereales corn flakes"
]
}
  ```
