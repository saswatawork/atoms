import { AppDataSource } from "../AppDataSource"

export const initializeDataSource = async () => {
    try {
        // to initialize the initial connection with the database, register all entities
        // and "synchronize" database schema, call "initialize()" method of a newly created database
        // once in your application bootstrap
        if (!AppDataSource.isInitialized) {
            await AppDataSource.initialize()
        }
        console.log("Data Source has been initialized!");
        return true;
    } catch (error) {
        console.error("Error during Data Source initialization:", error);
        return false;
    }

}