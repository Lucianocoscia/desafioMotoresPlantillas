import { Router } from "express";

// import { dirname, join } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));

const router = Router();
const products = [];

router.get("/", (req, res) => {
  res.render("../views/partials/form.hbs");
});

router.get("/products", (req, res) => {
  res.render("../views/partials/products.hbs", { products });
  // res.sendFile(join(__dirname, "../views/products.html"), { products });
});

router.post("/product", (req, res) => {
  const { name, price, thumbnail } = req.body;
  console.log(req.body);
  products.push({ name, price, thumbnail });

  res.redirect("/");
});

export default router;
