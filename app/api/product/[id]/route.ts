/**
 * @swagger
 * /api/product/:id:
 *   get:
 *     description: Returns product details
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Fail    
 */
export const GET = async (req: Request, res: Response) => {
    console.log("Get product details")
}

/**
 * @swagger
 * /api/product/:id:
 *   put:
 *     description: Update product details
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Fail    
 */
export const PUT = async (req: Request, res: Response) => {
    console.log("Update product details")
}

/**
 * @swagger
 * /api/product/:id:
 *   delete:
 *     description: Delete product
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Fail    
 */
export const DELETE = async (req: Request, res: Response) => {
    console.log("Delete product")
}