const express = require("express");
const db = require("./database/index.js");
// const appRoutes = require("./routes");
const PORT = 8000;
const app = express();
const cors = require("cors");

app.use(express.json());
const productsRouter = require("./routes/ProductRoutes.js");
const usersRouter = require("./routes/UsersRoutes.js");

// Mount your route files
app.use("/products", productsRouter); // Mount at /products
app.use("/users", usersRouter);
app.use(cors());
app.use(express.static(__dirname + "/../client/dist"));
//auth routs
// app.use("/signup", authRoutes);
// app.use("/app", authMiddelware, appRoutes);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
