-- Criar banco de dados
CREATE DATABASE ebac;

-- Criar esquema
CREATE SCHEMA STORE;

-- Criar tabela de produtos
CREATE TABLE STORE.PRODUCT (
    ProductID SERIAL PRIMARY KEY AUTO,
    ProductName VARCHAR(100) NOT NULL,
    Description TEXT,
    Price DECIMAL(10,2) NOT NULL,
    Stock INT NOT NULL,
    Status VARCHAR(20) DEFAULT 'available'
);

-- Criar tabela de estoque
CREATE TABLE STORE.STOCK (
    Stock_ID SERIAL PRIMARY KEY,
    Product_ID INTEGER NOT NULL,
    Quantity INTEGER NOT NULL,
    Last_Updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Location VARCHAR(50),
    Supplier_ID INTEGER,
    Stock_Threshold INTEGER DEFAULT 10,
    FOREIGN KEY (Product_ID) REFERENCES STORE.PRODUCT(ProductID)
);

-- Inserir dois produtos na tabela PRODUCT
INSERT INTO STORE.PRODUCT (ProductName, Description, Price, Stock, Status) 
VALUES 
('Smartphone X1', 'Smartphone com 128GB de armazenamento', 1999.99, 50, 'available'),
('Notebook Pro', 'Notebook com 16GB RAM e SSD de 512GB', 4999.99, 30, 'available');

-- Inserir dois registros na tabela STOCK 
INSERT INTO STORE.STOCK (Product_ID, Quantity, Location, Supplier_ID) 
VALUES 
(1, 20, 'Armazém A', 101),
(2, 15, 'Armazém B', 102);

-- Relação das tabelas product e Stock

SELECT s.Product_ID, p.ProductName, p.Price, s.Quantity, s.Stock_ID FROM STORE.PRODUCT p INNER JOIN STORE.STOCK s ON p.ProductID = s.Product_ID;

-- Fazendo a agregação das duas tabelas !

SELECT p.ProductID, p.ProductName, SUM(s.Quantity) AS Total_Stock FROM STORE.PRODUCT p INNER JOIN STORE.STOCK s ON p.ProductID = s.Product_ID GROUP BY p.ProductID, p.ProductName;
