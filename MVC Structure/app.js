// import Express
import express from "express";
// create Express application
const app = express();
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

// import routes
import productsRoutes from "./routes/products.routes.js";

app.use(express.json());
app.use("/products", productsRoutes);

app.listen(port, host, () =>
  console.log(`Server running at http://${host}:${port}`),
);

// Routes

// error
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});
