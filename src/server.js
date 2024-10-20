import mongoose from "mongoose";
import app from "./app.js";

const port = 3000;

const main = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/restaurant");
    console.log("Database connected");

    app.listen(port, () => {
      console.log(`rastaurant server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main(); // calling the main function
