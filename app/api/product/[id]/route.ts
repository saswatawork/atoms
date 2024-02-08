import { NextResponse } from "next/server"
import { Product } from "../Product";
import { getRepo } from "../../utility";

/**
 * @swagger
 * /api/product/{id}:
 *   put:
 *     tags: 
 *       - Product
 *     summary: Update product details
 *     description: Updates a product
 *     parameters:
 *       - in: path
 *         required: true
 *         name: id
 *         description: Product id
 *         schema:
 *           type: string
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
export const PUT = async (req: Request, { params: { id } }: { params: { id: number } }) => {
    try {
        const ProductRepo = await getRepo(Product);
        const { title, description } = await req.json();
        const product = await ProductRepo.findOneBy({ id });
        if (product) {
            product.title = title;
            product.description = description;
            const data = await ProductRepo.save(product);
            return NextResponse.json(data, { status: 200 });
        }
        return NextResponse.json({ message: "Not found" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

/**
 * @swagger
 * /api/product:
 *   delete:
 *     tags: 
 *       - Product
 *     summary: Deletes a product
 *     description: Deletes a product
 *     parameters:
 *       - in: path
 *         required: true
 *         name: id
 *         description: Product id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Fail    
 */
export const DELETE = async (req: Request, { params: { id } }: { params: { id: number } }) => {
    try {
        const ProductRepo = await getRepo(Product);
        const productToRemove = await ProductRepo.findOneBy({ id });
        if (productToRemove) {
            await ProductRepo.remove(productToRemove);
            return NextResponse.json({ message: "OK" }, { status: 200 });
        }
        return NextResponse.json({ message: "Not found" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

/**
 * @swagger
 * /api/product/{id}:
 *   get:
 *     tags: 
 *       - Product
 *     description: Returns product details
 *     summary: Product details 
 *     parameters:
 *       - in: path
 *         required: true
 *         name: id
 *         description: Product id
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Fail    
 */
export const GET = async (req: Request, { params: { id } }: { params: { id: number } }) => {
    try {
        const ProductRepo = await getRepo(Product);
        const data = await ProductRepo.findOneBy({ id });
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}
