const express = require("express");
const mongoose = require("mongoose");
const petsRouter = require("./routes/pets");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/pet-records")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/pets", petsRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
