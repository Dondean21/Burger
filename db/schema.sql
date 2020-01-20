DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;



CREATE TABLE burgers(
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name varchar(100),
    devoured BOOLEAN NOT NULL default 0
);