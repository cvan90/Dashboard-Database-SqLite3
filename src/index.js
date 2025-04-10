const sqlite3 = require('sqlite3').verbose();

let _dbname = "src\\data\\Dashboard Project.db"

let db = new sqlite3.Database(_dbname, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected successfully.');
  });