import { NextResponse } from "next/server"
import { ProductCategory } from "../ProductCategory";
import { getRepo } from "@/app/api/utility";

/**
 * @swagger
 * /api/product/category/{id}:
 *   put:
 *     tags: 
 *       - Product Category
 *     summary: Update product Category details
 *     description: Updates a product Category
 *     parameters:
 *       - in: path
 *         required: true
 *         name: id
 *         description: product Category id
 *         schema:
 *           type: string
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
export const PUT = async (req: Request, { params: { id } }: { params: { id: number } }) => {
    try {
        const ProductCategoryRepo = await getRepo(ProductCategory);
        const { name, description } = await req.json();
        const productCategory = await ProductCategoryRepo.findOneBy({ id });
        if (productCategory) {
            productCategory.name = name;
            productCategory.description = description;
            const data = await ProductCategoryRepo.save(productCategory);
            return NextResponse.json(data, { status: 200 });
        }
        return NextResponse.json({ message: "Not found" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

/**
 * @swagger
 * /api/product/category/{id}:
 *   delete:
 *     tags: 
 *       - Product Category
 *     summary: Deletes a product Category
 *     description: Deletes a product Category
 *     parameters:
 *       - in: path
 *         required: true
 *         name: id
 *         description: Product Category id
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
        const ProductCategoryRepo = await getRepo(ProductCategory);
        const productCategoryToRemove = await ProductCategoryRepo.findOneBy({ id });
        if (productCategoryToRemove) {
            await ProductCategoryRepo.remove(productCategoryToRemove);
            return NextResponse.json({ message: "OK" }, { status: 200 });
        }
        return NextResponse.json({ message: "Not found" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

/**
 * @swagger
 * /api/product/category/{id}:
 *   get:
 *     tags: 
 *       - Product Category
 *     description: Returns product category details
 *     summary: Product category details
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
        const ProductRepo = await getRepo(ProductCategory);
        const data = await ProductRepo.findOneBy({ id });
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}
