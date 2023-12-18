import mongoose from "mongoose";
import config from "../config.js";

const connect = async () => {
  try {
    const connection = await mongoose.connect("mongodb+srv://sainimritunjay987:iJj4Bo7e0JbM7s5g@cluster0.wai2zme.mongodb.net/");
    console.log("Database connection successful", connection.version);
  } catch (error) {
    console.error("Database connection error", error.message);
  }
};

export default connect;
