// Server 
const express = require("express");
const connectDB = require("./config/db")

const app = express();

// Database Connection
connectDB();

// Init Middleware
app.use(express.json({ extended: false}));

// Defining Route
app.use("/api/images", require("./route/images"));

// Serve static assest in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("image-slider/build"));

  // App get
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "image-slider", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));