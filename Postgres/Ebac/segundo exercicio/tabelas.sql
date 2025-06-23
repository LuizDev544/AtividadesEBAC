

-- Inserção de Dados na Tabela CUSTOMER
INSERT INTO STORE.CUSTOMER (Name, Email, Phone, Document_Number, Address, City, State, Postal_code, Birth_Date)
VALUES 
('Carlos Silva', 'carlos.silva@email.com', '11987654321', '12345678901', 'Rua das Flores, 123', 'São Paulo', 'SP', '01000-000', '1985-06-15'),
('Mariana Souza', 'mariana.souza@email.com', '21987654321', '23456789012', 'Avenida Central, 456', 'Rio de Janeiro', 'RJ', '22000-000', '1990-08-22');

-- Inserção de Dados na Tabela PRODUCT
INSERT INTO STORE.PRODUCT (ProductName, Description, Price, Stock, Status)
VALUES 
('Teclado Mecânico', 'Teclado mecânico RGB com switches azuis.', 350.00, 50, 'available'),
('Mouse Gamer', 'Mouse óptico com 7 botões programáveis.', 150.00, 100, 'available');

-- Inserção de Dados na Tabela STOCK
INSERT INTO STORE.STOCK (Product_id, Quantity, Location, Supplier_id)
VALUES 
(1, 50, 'Depósito A', 101),
(2, 100, 'Depósito B', 102);