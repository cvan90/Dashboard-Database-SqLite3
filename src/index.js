let _dbname = "src\data\Dashboard Project.db"

let db = new sqlite3.Database(_dbname, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected successfully.');
  });
  