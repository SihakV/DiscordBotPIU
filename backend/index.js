const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://<username>:<password>@paragondiscordbot.vtqubpz.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    // Your MongoDB operations here
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
}

connectToMongoDB();
