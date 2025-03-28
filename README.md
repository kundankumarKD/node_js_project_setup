# node_js_project_setup


show tables;

drop table products;

-- Create database
CREATE DATABASE IF NOT EXISTS `php_crud_api`;
USE `php_crud_api`;

-- Create products table
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `price` decimal(10,2) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Sample data
INSERT INTO `products` (`name`, `description`, `price`) VALUES
('Laptop', 'High performance laptop with 16GB RAM', 999.99),
('Smartphone', 'Latest smartphone with 5G support', 699.99),
('Headphones', 'Noise cancelling wireless headphones', 249.99),
('Smart Watch', 'Fitness tracking and notifications', 199.99);




Curl Request:- 

1. curl --location --request GET 'http://localhost:9000/omdbApi/list-movies'
