import { Router } from "express";

const router = Router();
const products = [];

router.get("/", (req, res) => {
  res.render("../views/main.pug");
});

router.get("/products", (req, res) => {
  res.render("../views/products.pug", { products });
});

router.post("/product", (req, res) => {
  const { name, price, thumbnail } = req.body;
  console.log(req.body);
  products.push({ name, price, thumbnail });

  res.redirect("/");
});

export default router;
