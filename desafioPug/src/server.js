import express, { json, urlencoded } from "express";
import routes from "./routes/index.js";
//dirname
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true })); // middlewares

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use("/", routes);

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
