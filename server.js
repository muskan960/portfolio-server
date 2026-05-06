

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/userRoutes"));



app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});


