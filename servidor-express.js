const express = require("express");
const app = express();

const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Jovem Maligno", type: "Mago MAU", attack: 12, defense: 3 },
  { name: "Russo Comunista", type: "Comunista", attack: 7, defense: 9 },
  { name: "Americano Obeso Mórbido", type: "Obeso", attack: 20, defense: 409 },
  { name: "Americano Obeso ProMAX", type: "Obeso", attack: 20, defense: 4209 },

];

app.get("/", (req, res) => {
  res.send("<h1>Início</h1>");
});

app.get("/sobre", (req, res) => {
  res.send("<h1>Rafael</h1>" +
 "<p>TGPSIT2024</p>"+ 
 "<h1>Adeus</h1>");
});

app.get("/cartas", (req, res) => {
    const items = cards.map(card => `<li>${card.name}</li>`).join("");
    const card = cards[Math.floor(Math.random() * cards.length)];

  res.send(`${items}` +
  `${cards.length}`);

});
app.get("/cartasA", (req, res) => {
  const items = cards.map(card => `<li>${card.name}</li>`).join("");
    const card = cards[Math.floor(Math.random(cards.length))];
  res.send(`${card.name}, ${card.attack}, ${card.defense}`);
});
app.get("/Agora", (req, res) => {
  const now = new Date().toLocaleString("pt-PT");
  res.send(`${now}`);
});



// sem caminho e NO FIM: apanha tudo o que sobrou
app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(3000, () => console.log("http://localhost:3000"));