const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://user1:_____@cluster1.ddwffa4.mongodb.net/?appName=Cluster1");
        console.log("Connected to DB");
    }
    catch (error) {
        console.log("Connection failed");
    }
}

connectDB();

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            max: 100,
            min: 18
        }
    }
);

const User = mongoose.model("User", userSchema);

async function find_user() {
    let user_list = await User.find({ name: "Alice" });
    console.log(user_list);
}

insert_user();