import { NextResponse } from "next/server"
import { AppDataSource } from "../../AppDataSource";
import { ProductCategory } from "..";

const ProductCategoryRepo = AppDataSource.getRepository(ProductCategory);

/**
 * @swagger
 * tags: 
 *   name: Product Category
 *   desctription: Everything about Product Category
 * /api/product/category:
 *   get:
 *     tags: 
 *       - Product Category
 *     description: Returns all product category
 *     summary: Get all product category
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Fail    
 */
export const GET = async (req: Request, res: Response) => {
    try {
        const data = await ProductCategoryRepo.find();
        return NextResponse.json({ message: "OK", data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}


/**
 * @swagger
 * /api/product/category:
 *   post:
 *     tags: 
 *       - Product Category
 *     description: Add a new product category
 *     summary: Add a product category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/ProductCategory'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Fail    
 */
export const POST = async (req: Request, res: Response) => {
    try {
        const { name, description } = await req.json();
        const newProductCategory = new ProductCategory();
        newProductCategory.name = name;
        newProductCategory.description = description;
        const data = await ProductCategoryRepo.save(newProductCategory);
        return NextResponse.json({ message: "OK", data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}





/**
 * @swagger
 * components:
 *   schemas:
 *     ProductCategory:
 *       type: object
 *       properties: 
 *         name:
 *           type: string
 *         description:
 *           type: string
 *       example:
 *         name: Mobile 
 *         description: This is a mobile category
 */