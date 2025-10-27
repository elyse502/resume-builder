import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connected successfully 🔗");
    });

    let mogodbURI = process.env.MONGODB_URI;
    const projectName = "resume-builder";

    if (!mogodbURI) {
      throw new Error("MONGODB_URI environment variable is not set");
    }

    if (mogodbURI.endsWith("/")) {
      mogodbURI = mogodbURI.slice(0, -1);
    }

    await mongoose.connect(`${mogodbURI}/${projectName}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
