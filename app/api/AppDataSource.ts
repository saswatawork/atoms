import { DataSource } from "typeorm";
import { User } from "./user";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    // port: 3306,
    username: "root",
    password: "",
    database: "space",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})