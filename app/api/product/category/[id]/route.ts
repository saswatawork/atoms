import { NextResponse } from "next/server"
import { AppDataSource } from "../../../AppDataSource";
import { ProductCategory } from "../ProductCategory";


const ProductCategoryRepo = AppDataSource.getRepository(ProductCategory)

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
        const { name, description } = await req.json();
        const productCategory = await ProductCategoryRepo.findOneBy({ id });
        if (productCategory) {
            productCategory.name = name;
            productCategory.description = description;
            const data = await ProductCategoryRepo.save(productCategory);
            return NextResponse.json({ message: "OK", data }, { status: 200 });
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


