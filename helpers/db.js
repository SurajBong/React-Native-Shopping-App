import { openDatabase } from "expo-sqlite";

const db = openDatabase("products.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY NOT NULL, ownerId INTEGER NOT NULL, title TEXT NOT NULL, imageUrl TEXT NOT NULL, description TEXT NOT NULL, price REAL NOT NULL);",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const insertProduct = (title, ownerId, imageUrl, description, price) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO products (title, ownerId, imageUrl, description, price) VALUES (?, ?, ?, ?, ?);",
        [title, ownerId, imageUrl, description, price],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};
