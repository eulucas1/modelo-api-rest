import express from "express";

const app = express();
app.use(express.json());

const celulares = [
  {
    id: 1,
    modelo: "Galaxy s23 Ultra",
    empresa: "Samsung"
  },
  {
    id: 2,
    modelo: "Iphone 14",
    empresa: "Apple"
  },
  {
    id: 3,
    modelo: "Redmi Note 13",
    empresa: "Xiaomi"
  }
]

function buscaCelular(id) {
  return celulares.findIndex(celular => {
    return celular.id === Number(id);
  })
}

app.get("/", (req, res) => {
  res.status(200).send("Modelo de API Psolutions");
});

app.get("/celulares", (req, res) => {
  res.status(200).json(celulares);
});

app.get("/celulares/:id", (req, res) => {
  const index = buscaCelular(req.params.id);
  res.status(200).json(celulares[index]);
})

app.post("/celulares", (req, res) => {
  celulares.push(req.body);
  res.status(201).send("celular cadastrado com sucesso");
});

app.put("/celulares/:id", (req, res) => {
  const index = buscaCelular(req.params.id);
  celulares[index].titulo = req.body.titulo;
  res.status(200).json(celulares);
});

app.delete("/celulares/:id", (req, res) => {
  const index = buscaCelular(req.params.id);
  celulares.splice(index, 1);
  res.status(200).send("celular removido com sucesso");
});

export default app;
