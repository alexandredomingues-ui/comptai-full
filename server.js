
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 ComptAI est en ligne</h1>
    <p>Le serveur fonctionne correctement.</p>
    <p>Accès via : http://localhost:${PORT}</p>
  `);
});

app.get("/api/test", (req, res) => {
  res.json({ status: "ok", message: "API fonctionnelle" });
});

app.listen(PORT, () => {
  console.log("Serveur lancé sur http://localhost:" + PORT);
});
