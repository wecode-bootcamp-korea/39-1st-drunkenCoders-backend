-- migrate:up
  CREATE TABLE cart (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT cart_users_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT cart_products_id_fkey FOREIGN KEY (product_id) REFERENCES products(id)
);
-- migrate:down
DROP TABLE cart;