const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();

    const db = client.db("libraryDB");
    const collection = db.collection("books");


    await collection.insertMany([
      { title: "Java Basics", author: "John", location: "Shelf A" },
      { title: "Node.js Guide", author: "Dean", location: "Shelf B" },
      { title: "Python 101", author: "Deepak", location: "Shelf D" },
      { title: "C++ Mastery", author: "Dean", location: "Shelf C" },
      { title: "Data Structures", author: "Ravi", location: "Shelf B" },
      { title: "React Handbook", author: "Derek", location: "Shelf D" }
    ]);

    console.log("Books inserted");

    
    await collection.updateOne(
      { title: "Java Basics" },
      { $set: { location: "Shelf Z" } }
    );

    console.log("Updated Java Basics location");

    
    await collection.updateMany(
      { author: "Dean" },
      { $set: { location: "Shelf E" } }
    );

    console.log("Updated Dean's books");

    
    await collection.deleteOne({ title: "Python 101" });

    console.log("Deleted Python 101");

    
    await collection.deleteMany({
      title: { $regex: "^D" }
    });

    console.log("Deleted books starting with D");

    
    const books = await collection.find().toArray();
    console.log("Remaining Books:");
    console.log(books);

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();