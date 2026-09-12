import mongoose from "mongoose";

/**
 * Global cached connection to avoid re-connecting on every hot-reload in dev.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  let MONGODB_URI =
    process.env.MONGODB_URI ||
    "mongodb+srv://techbyrayyan_db_user:NdjKKZajplYgM1Dq@blankslate.lxo1k6t.mongodb.net/blank_login?appName=blankslate";

  // Force database in connection string to blank_login
  if (MONGODB_URI.includes("mongodb.net/")) {
    MONGODB_URI = MONGODB_URI.replace(/mongodb\.net\/([^?]+)/, "mongodb.net/blank_login");
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
        dbName: "blank_login",
      })
      .then((m) => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
