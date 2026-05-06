

// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api", require("./routes/userRoutes"));

// const PORT = process.env.PORT || 4000;

// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });


require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors({
  origin: "*", // ya apna frontend URL dal sakti ho
}));
app.use(express.json());

// Routes
app.use("/api", require("./routes/userRoutes"));

// ❌ listen hata diya
// ✅ export for Vercel
module.exports = app;