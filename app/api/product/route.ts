import { NextResponse } from "next/server"
import { Product } from ".";
import { getRepo } from "../utility";


/**
 * @swagger
 * tags: 
 *   name: Product
 *   desctription: Everything about Products
 * /api/product:
 *   get:
 *     tags: 
 *       - Product
 *     description: Returns all products
 *     summary: Get all products
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Fail    
 */
export const GET = async (req: Request, res: Response) => {
    try {
        const ProductRepo = await getRepo(Product);
        const data = await ProductRepo.find();
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}


/**
 * @swagger
 * /api/product:
 *   post:
 *     tags: 
 *       - Product
 *     description: Add a new product
 *     summary: Add a product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/Product'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Fail    
 */
export const POST = async (req: Request, res: Response) => {
    try {
        const ProductRepo = await getRepo(Product);
        const { title, description, category } = await req.json();
        const newProduct = new Product();
        newProduct.title = title;
        newProduct.description = description;
        newProduct.category = category;
        const data = await ProductRepo.save(newProduct);
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}





/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties: 
 *         title:
 *           type: string
 *         description: 
 *           type: string
 *         category:
 *           type: number 
 *       example:
 *         title: This is an example product
 *         description: This is example product description
 *         category: 1     
 */