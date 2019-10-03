ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123123123';

DROP DATABASE IF EXISTS secondtime_db;

CREATE DATABASE secondtime_db;

-- USE second_time;

-- CREATE TABLE products (
-- product_id int(11) NOT NULL AUTO_INCREMENT, 
-- product_name VARCHAR(250), 
-- product_description VARCHAR(250), 
-- address_street VARCHAR(250), 
-- address_apartment INTEGER, 
-- address_zipcode INTEGER, 
-- address_city VARCHAR(250), 
-- address_state VARCHAR(250),
-- PRIMARY KEY (product_id)
-- );

-- CREATE TABLE users (
-- user_id int(11) NOT NULL AUTO_INCREMENT, 
-- user_name VARCHAR(250), 
-- PRIMARY KEY (user_id)
-- );