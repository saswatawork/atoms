import { NextResponse } from "next/server"

/**
 * @swagger
 * /api/product:
 *   get:
 *     description: Returns all products
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Fail    
 */
export const GET = async (req: Request, res: Response) => {
    try {
        const data = [{}];
        return NextResponse.json({ message: "OK", data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

export const POST = async (req: Request, res: Response) => {
    console.log("Add product")
}