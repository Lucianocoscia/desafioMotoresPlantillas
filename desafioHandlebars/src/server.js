import express, { json, urlencoded } from "express";
import routes from "./routes/index.js";
//dirname
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true })); // middlewares

// lo definimos
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: join(__dirname, "/views/layout/main.hbs"),
    layoutsDir: join(__dirname, "/views/layout"),
    partialsDir: join(__dirname, "/views/partials"),
  })
);

app.set("view engine", "hbs"); // se lo damos a express para q lo peuda setear
app.set("views", join(__dirname + "/views"));

app.use("/", routes);

app.listen(8080, () => {
  console.log("server listening on port 8080");
});
