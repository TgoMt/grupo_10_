DROP DATABASE IF EXISTS `siPintaDb`;
CREATE DATABASE `siPintaDb`;
USE `siPintaDb`;

CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `lastname` VARCHAR(255) NOT NULL,
   `dni` INT NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `adress` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `image` VARCHAR(255) NOT NULL,
   `roleId` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `price` FLOAT NOT NULL,
   `discount` INT NOT NULL,
   `description` VARCHAR(255) NOT NULL,
   `data` VARCHAR(255) NOT NULL,
   `image` VARCHAR(255),
   `categoryId` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categories` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `category` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `roles` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `role` VARCHAR(255),
   PRIMARY KEY (`id`)
);


ALTER TABLE `users` ADD CONSTRAINT `FK_69f609db-c08d-44b8-bf32-d9ad7b8eff70` FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_35055047-ccc2-488b-b275-215ff4a421ee` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`)  ;
