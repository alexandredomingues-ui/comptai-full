import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/test", (req, res) => {
  res.json({ status: "ok", message: "API fonctionne" });
});

app.listen(PORT, () => {
  console.log("Serveur lancé sur le port " + PORT);
});
