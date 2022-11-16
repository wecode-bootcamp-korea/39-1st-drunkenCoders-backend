-- migrate:up
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL UNIQUE,
    capacity_ml VARCHAR(200) NOT NULL,
    description VARCHAR(1000) NULL,
    detail VARCHAR(2000) NULL,
    detail_image VARCHAR(2000) NULL,
    price DECIMAL(10,2) NOT NULL,
    fruit_id INT NULL,
    flower_id INT NULL,
    grain_id INT NULL,
    sweetness_id INT NULL,
    sourness_id INT NULL,
    carbon_id INT NULL,
    alchol VARCHAR(200) NOT NULL,
    categories_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL UNIQUE
);

CREATE TABLE fruits (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NULL
);

CREATE TABLE flowers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NULL
);

CREATE TABLE grains(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NULL
);

CREATE TABLE sweetness (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    degree VARCHAR(200) NULL
);

CREATE TABLE sourness(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    degree VARCHAR(200) NULL
);

CREATE TABLE carbon(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    degree VARCHAR(200) NULL
);

CREATE TABLE product_images(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(1000) NULL,
    product_id INT NOT NULL
);

-- migrate:down
DROP TABLE product_images;
DROP TABLE products;
DROP TABLE categories;
DROP TABLE fruits;
DROP TABLE flowers;
DROP TABLE grains;
DROP TABLE sweetness;
DROP TABLE sourness;
DROP TABLE carbon;