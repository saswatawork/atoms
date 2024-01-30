import { NextResponse } from "next/server"
import { AppDataSource } from "../AppDataSource";
import { User } from ".";


const UserRepo = AppDataSource.getRepository(User)

/**
 * @swagger
 * /api/user:
 *   get:
 *     description: Get user list
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Fail    
 */
export const GET = async (req: Request, res: Response) => {
    try {
        const data = await UserRepo.find()
        return NextResponse.json({ message: "OK", data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

/**
 * @swagger
 * /api/user:
 *   post:
 *     description: Add a new user
 *     summary: Add a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties: 
 *               phone:
 *                 type: string
 *               email: 
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               phone: 85421654781
 *               email: example@mail.com
 *               password: 12345678
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Fail    
 */
export const POST = async (req: Request, res: Response) => {
    try {
        const { phone, email, password } = await req.json();
        const newUser = new User();
        newUser.phone = phone;
        newUser.email = email;
        newUser.password = password;
        const data = await UserRepo.save(newUser);
        return NextResponse.json({ message: "OK", data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}