DROP DATABASE IF EXISTS `siPintaDb`;
CREATE DATABASE `siPintaDb`;
USE `siPintaDb`;

CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(40) NOT NULL,
   `lastname` VARCHAR(40) NOT NULL,
   `dni` INT NOT NULL,
   `email` VARCHAR(40) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `image` VARCHAR(255) NOT NULL,
   `roleId` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(40) NOT NULL,
   `price` FLOAT NOT NULL,
   `discount` INT NOT NULL,
   `description` VARCHAR(255) NOT NULL,
   `image` VARCHAR(255),
   `categoryId` INT NOT NULL,
   PRIMARY KEY (`id`),
   `data` VARCHAR(255)
);

CREATE TABLE `categories` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `category` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `roles` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `role` VARCHAR(40),
   PRIMARY KEY (`id`)
);
insert into categories values (1, "Cervezas"),(2,"Licores"),(3,"Bebidas Blancas"),(4,"Aperitivos");

insert into roles values (1, "Administrador"),(2,"Cliente");

insert into products values (1,"Cerveza Corona six pack",800,5,"Corona es una invitación para salir y relajarse. Su líquido dorado se elabora 100% en México y es la cerveza mexicana más popular del mundo. Corona ha estado complementando los momentos sencillos de la vida desde 1925, y ahora se disfruta en más de 180 países alrededor del mundo.","Corona-out.jpg",1,"a"),(2,"Jack Daniel's Old No. 7",5600,10,"Ablandado gota a gota a través de carbón de arce de azúcar, luego madurado en barriles artesanales de nuestra propia fabricación. Y nuestro Tennessee Whiskey no sigue un calendario. Solo estará listo cuando nuestros catadores digan que lo está. Lo juzgamos por la forma en que se ve.","jack daniels-out.jpg",2,"a"),(3,"Gin Bombay Sapphire",5000,15,"Al paladar, transmite piel de limón y una dulzura media, seguidas de un enebro intenso y una dulzura ácida de limón, apoyados por notas de salida de cilantro y regaliz, equilibradas por las notas más profundas y especiadas que definen la base del paladar.","bombay - out.png",3,"a"),(4,"Ron Bacardi Carta Oro",1600,10,"Bacardí Carta Oro es el primer ron dorado ligero del mundo. Se envejece en barricas de roble blanco tostado al fuego para darle carácter, sometiéndolo posteriormente a filtración hasta conseguir su suavidad característica. Es la orgullosa creación de los Maestros de Ron Bacardí.","ronBacardi-out.jpg",2,"a"),(5,"Vodka Smirnoff",1300,20,"Smirnoff es un vodka de origen ruso, de 37,5% alc./vol., obtenido por triple destilación del alcohol de grano, y filtrado por carbón, cuya fabricación se inició en el año 1864 por Pyotr Alexandrovich Smirnov.","Smirnoff-out.jpg",3,"a"),(6,"Fernet Branca",1250,10,"Fernet-Branca es de color marrón claro con reflejos ámbar y desprende un aroma a menta que predomina sobre el resto de las hierbas con las que se elabora, aunque debajo de la menta se percibe pino, algunas notas florales y hasta caramelo.","fernet-out.jpg",4,"a"),(7,"Jägermeister",5850,10,"Jägermeister es un licor de hierbas endulzado, pero con un dejo amargo, el cual tiene 34,5% de contenido alcohólico. Es muy popular en Baja Sajonia en la ciudad de Wolfenbüttel (Alemania). En esta ciudad se encuentra la raíz de la empresa que la comercializa: Mast-Jägermeister SE.","Jägermeister-out.png",2,"a");

insert into users values();

ALTER TABLE `users` ADD CONSTRAINT `FK_69f609db-c08d-44b8-bf32-d9ad7b8eff70` FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`);

ALTER TABLE `products` ADD CONSTRAINT `FK_35055047-ccc2-488b-b275-215ff4a421ee` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`);