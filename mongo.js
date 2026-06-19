const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb+srv://user1:pass1@cluster1.ddwffa4.mongodb.net/test");

    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}

connectDB();

// Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: Number,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

async function demo() {
  try {
    // Insert
    const user = await User.create({
      name: "John Doe",
      email: "john@example.com",
      age: 30,
    });

    console.log("Inserted:", user);

    // Fetch
    const users = await User.find({name:"John Doe"});

    console.log("All Users:");
    console.log(users);
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.disconnect();
  }
}

demo();