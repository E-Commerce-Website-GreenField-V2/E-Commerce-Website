const express = require("express");
const db = require("./database/index.js");
// const appRoutes = require("./routes");
const PORT = 3000;
const app = express();
const cors = require("cors");

app.use(express.json());

app.use(cors());
app.use(express.static(__dirname + "/../client/dist"));
//auth routs
// app.use("/signup", authRoutes);
// app.use("/app", authMiddelware, appRoutes);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
