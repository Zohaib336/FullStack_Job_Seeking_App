import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect("mongodb://localhost:27017", {
    dbName: "JobWave",
  })
    .then(() => {
      console.log("Database connection established");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
}
