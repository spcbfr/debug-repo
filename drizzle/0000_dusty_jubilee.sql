CREATE TABLE `sales` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`full_name` text,
	`status` enum('delivered','pending'),
	CONSTRAINT `sales_id` PRIMARY KEY(`id`)
);
