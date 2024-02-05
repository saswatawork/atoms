import { NextResponse } from "next/server"
import { AppDataSource } from "../../AppDataSource";
import { Product } from "../Product";


const ProductRepo = AppDataSource.getRepository(Product)

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
        const { title, description } = await req.json();
        const product = await ProductRepo.findOneBy({ id });
        if (product) {
            product.title = title;
            product.description = description;
            const data = await ProductRepo.save(product);
            return NextResponse.json({ message: "OK", data }, { status: 200 });
        }
        return NextResponse.json({ message: "Not found" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

/**
 * @swagger
 * /api/product/{id}:
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


