const express = require("express");
const db = require("./database/index.js");
const PORT = 8000;
const app = express();
const cors = require("cors");
const productsRouter = require('./routes/ProductRoutes.js');
const usersRouter = require('./routes/ProductRoutes.js');
const authMiddelware = require ('./middelwares/auth.js')
const authRoute = require('./routes/')

app.use(express.json());




app.use(cors());
app.use(express.static(__dirname + "/../client/dist"));

//auth route (public)
app.use("/auth", authRoute);

//all routes below this middelware are secure
app.use(authMiddelware);

app.use('/products', productsRouter); 
app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
