const connection = require("./connection.js");

const orm = {

   selectAll: function (cb) {
      const query = 'SELECT * FROM burgersdb';
      connection.query(query, (err, result) => {
         if (err) throw err;
         cb(result);
      });
   },

   insert: function (burger, cb) {
      const query = `INSERT INTO burgers (burger_name) VALUES ("${burger}")`;
      connection.query(query, (err, result) => {
         if(err)throw err;
         cb(result);
      });
   },

   update: function(burgerID, cb) {
      connection.query(query, (err, result) => {
         if (err) throw err;
         cb(result)
      });
   }
}


module.exports = orm;