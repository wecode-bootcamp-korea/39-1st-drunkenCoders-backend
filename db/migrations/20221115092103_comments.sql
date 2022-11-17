-- migrate:up
CREATE TABLE comments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  content VARCHAR(1000) NULL,
  rating DECIMAL(10,2) NOT NULL,
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT comments_users_id_fkey FOREIGN KEY (user_id) REFERENCES users(id),
  CONSTRAINT comments_products_id_fkey FOREIGN KEY (product_id) REFERENCES products(id)
);

  CREATE TABLE comments_images (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  image_url VARCHAR(2000) NULL,
  comment_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT comments_images_comments_id_fkey FOREIGN KEY (comment_id) REFERENCES comments(id)
);

-- migrate:down
DROP TABLE comments;
DROP TABLE comments_images;