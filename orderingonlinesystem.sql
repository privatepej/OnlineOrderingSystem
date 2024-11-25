drop database if exists online_ordering_system;

create database online_ordering_system;

\c online_ordering_system

drop table if exists users;
drop table if exists users_payments;
drop table if exists user_orders;
drop table if exists sales;
drop table if exists product;
drop table if exists product_images;
drop table if exists category;


-- Create Category Table
create sequence category_id_seq start 1;

create table category (
    id integer not null default nextval('category_id_seq'),
    cname varchar(100) not null,
    unique (cname),
    primary key (id)
);


-- Create Product Table
create sequence product_id_seq start 1;

create table product (
    id integer not null default nextval('product_id_seq'),
    pname varchar(100) not null,
    price decimal(10, 2) not null,
    description text,
    categoryname varchar(100) not null,
    primary key (id),
    unique (pname),
    foreign key (categoryname) references category(cname)
);


-- Create Product_Images Table
create sequence product_image_id_seq start 1;

create table product_images (
    id integer not null default nextval('product_image_id_seq'),
    pname varchar(100) not null,
    imageName varchar(255) not null,
    primary key (id),
    foreign key (pname) references product(pname)
);

-- Create Users Table
create sequence users_id_seq start 1;

create table users (
    id integer not null default nextval('users_id_seq'),  
    userName varchar(50) not null,
    email varchar(100) not null,
    password varchar(100) not null,
    address varchar(255) not null,
    role varchar(20) not null,
    primary key (id)
);

-- Create Users_Payments Table
create sequence user_payment_id_seq start 100;
create table users_payments (
    paymentId integer not null default nextval('user_payment_id_seq'),
    userId integer not null,
    paymentType varchar(50) not null,
    securityCode varchar(10) not null,
    expirationDate date not null,
    cardType varchar(50) not null,
    cardHolderName varchar(100) not null,
    primary key (paymentId),
    foreign key (userId) references users(id)
);

-- Create User_Orders Table
create sequence user_order_id_seq start 1;

create table user_orders (
    orderId integer not null default nextval('user_order_id_seq'),
    userId integer not null,
    paymentId integer ,
    orderOn timestamp not null default current_timestamp,
    orderT decimal(10, 2) not null,
    primary key (orderId),
    foreign key (userId) references users(id),
    foreign key (paymentId) references users_payments(paymentId)
);



-- Create Sales Table
create sequence sales_id_seq start 1;
create table sales (
    salesId integer not null default nextval('sales_id_seq'),
    orderId integer not null,
    itemNo integer not null,
    qty integer not null,
    soldOn timestamp not null default current_timestamp,
    payment varchar(50) not null,
    primary key (salesId),
    foreign key (orderId) references user_orders(orderId),
    foreign key (itemNo) references product(id) 
);



-- Insert mock data into Category table
INSERT INTO category (cname) VALUES 
('Snacks'),
('Meals');

-- Insert mock data into Product table
INSERT INTO product (pname, price, description, categoryname) VALUES 
('Pepsi', 1.50, 'Cola drink', 'Snacks'),
('Chips', 2.00, 'Crunchy meal', 'Meals'),
('Sandwich', 5.00, 'Healthy meal', 'Meals'),
('Juice', 3.00, 'Fruit snacks', 'Snacks');

-- Insert mock data into Product_Images table
INSERT INTO product_images (pname, imagename) VALUES 
('Pepsi', 'pepsi.png'),
('Chips', 'chips.png'),
('Sandwich', 'sandwich.png'),
('Juice', 'juice.png');

-- Insert mock data into Users table
-- INSERT INTO users (username, email, password, address, role) VALUES 
-- ('jane_smith', 'jane.smith@example.com', 'password123', '456 Oak St', 'ADMINISTRATOR'),
-- ('jeff', 'jeff@example.com', 'password123', '456 Garcia St', 'CUSTOMER');

-- Insert mock data into Users_Payments table
-- INSERT INTO users_payments (userid, paymenttype, securitycode, expirationdate, cardtype, cardholdername) VALUES 
-- (1, 'Debit Card', '456', '2025-06-30', 'MasterCard', 'Jeff T'),
-- (2, 'Credit Card', '456', '2025-06-30', 'MasterCard', 'MD T');

-- Insert mock data into User_Orders table
-- INSERT INTO user_orders (userid, paymentid, orderon, ordert) VALUES 
-- (1, 100, '2024-12-22', 15.00),
-- (2, 100, '2024-11-22', 15.00);

-- Insert mock data into Sales table
-- INSERT INTO sales (orderid, itemno, qty, soldon, payment) VALUES 
-- (1, 3, 1, '2024-12-22', 'Debit Card'),
-- (2, 3, 1, '2024-11-22', 'Credit Card');


ALTER TABLE product
DROP CONSTRAINT product_categoryname_fkey,
ADD CONSTRAINT product_categoryname_fkey
FOREIGN KEY (categoryname)
REFERENCES category(cname)
ON UPDATE CASCADE ON DELETE CASCADE;


ALTER TABLE product_images
DROP CONSTRAINT product_images_pname_fkey,
ADD CONSTRAINT product_images_pname_fkey 
FOREIGN KEY (pname)
REFERENCES product(pname) 
ON UPDATE CASCADE ON DELETE CASCADE;
