import { openDB } from "idb";
const DB_NAME = "jate";
const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("PUT to the database");
  const textDB = await openDB(DB_NAME, 1);
  const tx = textDB.transaction(DB_NAME, "readwrite");
  const store = tx.objectStore(DB_NAME);
  const request = store.put({ Text: content });
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GET from the database");
  const textDB = await openDB(DB_NAME, 1);
  const tx = textDB.transaction(DB_NAME, "readonly");
  const store = tx.objectStore(DB_NAME);
  const request = store.getAll();
  const result = await request;
  console.log("result.value", result);
  return result.value;
};

initdb();
