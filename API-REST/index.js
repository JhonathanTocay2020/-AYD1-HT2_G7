const express = require("express");
const app = express();
const morgan = require("morgan");

app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

function esNumeroPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

//4to endpoint recibe numero y evalua que si es primo o no
app.post("/primo-201807420", (req, res) => {
  const numero = req.body.numero;
  let respuesta = {};
  if (esNumeroPrimo(numero)) {
    respuesta = {
      message: "si es numero Primo",
    };
  } else {
    respuesta = {
      message: "No es numero Primo",
    };
  }
  res.json(respuesta);
});

app.get('/info-201801268', (req, res) => {
  let integrantes = [
      { id: "201801268", nombre: "Jhonathan Daniel Tocay Cotzojay" },
      { id: "201807420", nombre: "David Roberto Diaz Prado" },
      { id: "201900122", nombre: "Herbert Steve González Camey" },
      { id: "201900172", nombre: "Melani Alejandra López de la Roca" }
  ];

  res.json(integrantes);
});

//endpoint de prueba
app.get("/", (req, res) => {
  res.json({
    Title: "Hola mundo",
  });
});

app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});
