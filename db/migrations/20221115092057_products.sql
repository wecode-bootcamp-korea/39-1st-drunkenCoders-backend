-- migrate:up
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
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT products_categories_id_fkey FOREIGN KEY (categories_id) REFERENCES categories(id),
    CONSTRAINT products_flowers_id_fkey FOREIGN KEY (flower_id) REFERENCES flowers(id),
    CONSTRAINT products_fruits_id_fkey FOREIGN KEY (fruit_id) REFERENCES fruits(id),
    CONSTRAINT products_grains_id_fkey FOREIGN KEY (grain_id) REFERENCES grains(id),
    CONSTRAINT products_sweetness_id_fkey FOREIGN KEY (sweetness_id) REFERENCES sweetness(id),
    CONSTRAINT products_sourness_id_fkey FOREIGN KEY (sourness_id) REFERENCES sourness(id),
    CONSTRAINT products_carbon_id_fkey FOREIGN KEY (carbon_id) REFERENCES carbon(id)
);


CREATE TABLE product_images(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(1000) NULL,
    product_id INT NOT NULL,
    CONSTRAINT product_images_products_id_fkey FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE tags (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(200) NOT NULL UNIQUE,
   product_id INT NOT NULL,
   CONSTRAINT tags_products_fkey FOREIGN KEY (product_id) REFERENCES products(id)
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
DROP TABLE tags;