// Violates DIP: High-level module depends on a low-level module
class MySQLDatabase {
    connect() {
      console.log("Connecting to MySQL...");
    }
  }
  
  class App {
    constructor() {
      this.database = new MySQLDatabase();
    }
  
    start() {
      this.database.connect();
    }
  }
  
  // Follows DIP: High-level module depends on abstraction
  class Database {
    connect() {
      throw new Error("Method not implemented");
    }
  }
  
  class MySQLDatabase extends Database {
    connect() {
      console.log("Connecting to MySQL...");
    }
  }
  
  class MongoDBDatabase extends Database {
    connect() {
      console.log("Connecting to MongoDB...");
    }
  }
  
  class App {
    constructor(database) {
      this.database = database;
    }
  
    start() {
      this.database.connect();
    }
  }
  
  const database = new MongoDBDatabase();
  const app = new App(database);
  app.start(); // "Connecting to MongoDB..."
  