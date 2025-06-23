CREATE DATABaSE ddlebac;



-- tabela de clientes 

CREATE TABLE "STORE" .CUSTUMER (
    Custumer_id SERIAL PRIMARY KEY,
    Name VARCHAR(225) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Phone VARCHAR(20),
    Document_Number VARCHAR (20) UNIQUE,
    Address VARCHAR(255),
    City VARCHAR(100),
    State VARCHAR(50),
    Postal_code VARCHAR(20),
    Birth_Date DATE,
    Registration_date TIMESTAMP DEFAULT CURRENT_TIMETAMP,
    Status VARCHAR(20) DEFAULT 'active'
);

-- Tabela de produtos

CREATE TABLE "STORE" .PRODUCT{
    ProductID SERIAL PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL,
    Description TEXT,
    Price DECIMAL(10,2) NOT NULL,
    Stock INT NOT NULL
    Status VARCHAR(20) DEFAULT 'avaible'
};

-- Tabela de Estoque 

CREATE TABLE "STORE" .stock{
    stock_id SERIAL PRIMARY KEY,
    Product_id INTEGER NOT NULL,
    Quantity INTEGER NOT NULL,
    Last_updated TIMESTAMP DEFAULT CURRENT_TIMETAMP,
    Location VARCHAR(50),
    Supplier_id INTEGER,
    Stock_threshold INTEGER DEFAULT 10,
};