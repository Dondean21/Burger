const connection = require('./connection');

const orm = {

    selectAll: function (cb) {
        const query = 'SELECT * FROM burgers;';
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (burger, cb) {
        const query = `INSERT INTO burgers (burger_name) VALUES ("${burger}")`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (burgerID, cb) {
        const query = `UPDATE burgers SET devoured = 1 WHERE ID = ${burgerID}`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;
