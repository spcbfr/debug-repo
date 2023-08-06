import {
  int,
  mysqlEnum,
  mysqlTable,
  serial,
  text,
  uniqueIndex,
  varchar,
} from "drizzle-orm/mysql-core";
export const sales = mysqlTable("sales", {
  id: serial("id").primaryKey(),
  product: text("full_name"),
  status: mysqlEnum("status", ["delivered", "pending"]),
});
