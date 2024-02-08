import { DataSource } from "typeorm";
import { User } from "../user";
import { Product, ProductCategory } from "../product";

let AppDataSource: DataSource;
export const getAppDataSource = async () => {
    try {

        // to initialize the initial connection with the database, register all entities
        // and "synchronize" database schema, call "initialize()" method of a newly created database
        // once in your application bootstrap
        if (!AppDataSource || !AppDataSource.isInitialized) {
            AppDataSource = new DataSource({
                type: "mysql",
                host: "localhost",
                // port: 3306,
                username: "root",
                password: "",
                database: "space",
                synchronize: true,
                logging: true,
                entities: [User, Product, ProductCategory],
                subscribers: [],
                migrations: [],
            })
            await AppDataSource.initialize()
            console.log("Data Source has been initialized!");
        }
        return AppDataSource;
    } catch (error) {
        console.error("Error during Data Source initialization:", error);
        return AppDataSource;
    }
};