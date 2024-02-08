import { EntityTarget, ObjectLiteral } from "typeorm";
import { getAppDataSource } from "./getAppDataSource";

export const getRepo = async (repo: EntityTarget<ObjectLiteral>) => {
    const AppDataSource = await getAppDataSource();
    const ProductRepo = AppDataSource.getRepository(repo);
    return ProductRepo;
}