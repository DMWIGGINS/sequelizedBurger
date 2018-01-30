DROP DATABASE IF EXISTS burgers_db;
-- creating our burgers database
CREATE DATABASE burgers_db;
USE burgers_db;

-- creating our burgers table

CREATE TABLE burgers (

    id INT NOT NULL AUTO_INCREMENT,
    burger_name varchar
    (100) NULL,
    devoured BOOLEAN DEFAULT FALSE,
    date TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    primary key
    (id)
);