-- migrate:up
ALTER TABLE `products` ADD FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`);

ALTER TABLE `products` ADD FOREIGN KEY (`fruit_id`) REFERENCES `fruits` (`id`);

ALTER TABLE `products` ADD FOREIGN KEY (`flower_id`) REFERENCES `flowers` (`id`);

ALTER TABLE `products` ADD FOREIGN KEY (`grain_id`) REFERENCES `grains` (`id`);

ALTER TABLE `products` ADD FOREIGN KEY (`sweetness_id`) REFERENCES `sweetness` (`id`);

ALTER TABLE `products` ADD FOREIGN KEY (`sourness_id`) REFERENCES `sourness` (`id`);

ALTER TABLE `products` ADD FOREIGN KEY (`carbon_id`) REFERENCES `carbon` (`id`);

ALTER TABLE `product_images` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `comments` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `comments` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `comments_images` ADD FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`);

ALTER TABLE `tags` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
-- migrate:down