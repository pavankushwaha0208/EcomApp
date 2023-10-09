const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// MongoDB connection
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(process.env.MONGODB_URL, mongooseOptions)
  .then(() => {
    console.log("Connected to the database".bgGreen);
  })
  .catch((err) => {
    console.error(`Error connecting to the database: ${err}`.bgRed);
  });

// MongoDB schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

app.use(express.json()); // Middleware to parse JSON requests

// Root route
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

// Signup route
app.post("/signup", async (req, res) => {
  const { name, address, phone, email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.json({
        message: "This email is already registered",
        alert: false,
      });
    }
    const newUser = new userModel({
      email,
      password,
      name,
      address,
      phone,
    });

    await newUser.save();
    return res.json({ message: "Successful registration", alert: true });
  } catch (err) {
    console.error("Error occurred:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`.bgGreen);
});
