const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://user1:pass1@cluster1.ddwffa4.mongodb.net/?appName=Cluster1");
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
            type:String,
            required: true,
            unique: true,
            enum: ["admin","visitor"]
        },
        age: {
            type: Number,
            max: 100,
            min: 18
    }
);

const User = mongoose.model("User",userSchema);

async function insert_user() {
    await User.create({name:"Alice",age:20});
    console.log("User Created");
}

insert_user();