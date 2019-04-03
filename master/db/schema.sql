### Schema

CREATE DATABASE burgers_db;
USE burger_db;

CREATE TABLE cats
(
	id int NOT NULL AUTO_INCREMENT,
	burger name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
