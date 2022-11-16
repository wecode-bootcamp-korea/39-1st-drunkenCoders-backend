-- migrate:up
  CREATE TABLE tags (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL UNIQUE,
  product_id INT NOT NULL,
  CONSTRAINT `tags_product_id_products_fkey` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
);
-- migrate:down
DROP TABLE tags;