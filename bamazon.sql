CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products1 (
id INT PRIMARY KEY NOT NULL,
productname VARCHAR (30) NOT NULL,
departmentname VARCHAR (30) NOT NULL,
price DECIMAL(6,2) NOT NULL,
stockquantity INT NOT NULL
);


USE bamazon_db;
INSERT INTO products1 (id,productname, departmentname, price, stockquantity) VALUES (001,'Learn to Code Book', 'Books', 18.95, 37);

INSERT INTO products1 (id,productname, departmentname, price, stockquantity) VALUES (002,'Mass Effect 3', 'Video Games', 26.50, 18);

INSERT INTO products1 (id,productname, departmentname, price, stockquantity) VALUES (003,'Dell XPS 13', 'Electronics', 899.98, 7);

INSERT INTO products1 (id,productname, departmentname, price, stockquantity) VALUES (004,'Hoover Vacuum', 'Appliances', 167.34, 22);

INSERT INTO products1 (id,productname, departmentname, price, stockquantity) VALUES (005,'Playstation 4', 'Electronics', 349.97, 4);

INSERT INTO products1 (id,productname, departmentname, price, stockquantity) VALUES (006,'Running Sneakers', 'Footwear', 74.59, 65);

INSERT INTO products1 (id,productname, departmentname, price, stockquantity) VALUES (007,'Band T-shirt', 'clothing', 19.50, 94);

INSERT INTO products1 (id,productname, departmentname, price, stockquantity) VALUES (008,'Down Comforter', 'bedding', 46.89, 29);

INSERT INTO products1 (id,productname, departmentname, price, stockquantity) VALUES (009,'Diamond Necklace', 'Jewlery', 524.76, 6);

INSERT INTO products1 (id,productname, departmentname, price, stockquantity) VALUES (0010,'Blendtec Blender', 'Kitchen', 369.99, 15);
SELECT * FROM products1;
