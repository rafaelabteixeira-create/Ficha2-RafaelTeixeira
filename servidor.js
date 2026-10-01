const http = require("http");

const PORT = 3000;
const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Jovem Maligno", type: "Mago MAU", attack: 12, defense: 3 },
  { name: "Russo Comunista", type: "Comunista", attack: 7, defense: 9 },
  { name: "Americano Obeso Mórbido", type: "Obeso", attack: 20, defense: 409 },
  { name: "Americano Obeso ProMAX", type: "Obeso", attack: 20, defense: 4209 },

];

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);


  if (req.url === "/") {
    res.write("<h1>Bom dia</h1>");
    res.write("<p>Ola</p>");
    res.end("<h1>Adeus</h1>");
    return;
  }
  else if (req.url === "/sobre") {
    res.write("<h1>Rafael</h1>");
    res.write("<p>TGPSIT2024</p>");
    res.end("<h1>Adeus</h1>");
    return;
  }
  else if (req.url === "/cartas") {

    const items = cards.map(card => `<li>${card.name}</li>`).join("");
    const card = cards[Math.floor(Math.random() * cards.length)];
    res.write(`${items}`);

    res.end(`${cards.length}`);

    return;
  }
  else if (req.url === "/cartasA") {
    const items = cards.map(card => `<li>${card.name}</li>`).join("");
    const card = cards[Math.floor(Math.random(cards.length))];
    
    res.end(`${card.name}, ${card.attack}, ${card.defense}`);
  }
  else if (req.url === "/agora") {

    const now = new Date().toLocaleString("pt-PT");
    res.end(
      
    );
    return;
  }

  else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>ERRO</h1>");
    return;
  }
});



server.listen(PORT, () => {
  console.log(`Server a correr em http://localhost:${PORT}`);
});