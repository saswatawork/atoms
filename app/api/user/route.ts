import { NextResponse } from "next/server"
import bcrypt from 'bcrypt';
import { User } from ".";
import { HTTP_STATUS } from "../config/httpStatus";
import { getRepo } from "../utility";


/**
 * @swagger
 * tags: 
 *   name: User
 *   desctription: Everything about users
 * /api/user:
 *   get:
 *     tags: 
 *       - User
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
        const UserRepo = await getRepo(User);
        const data = await UserRepo.find();
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

/**
 * @swagger
 * /api/user:
 *   post:
 *     tags: 
 *       - User
 *     description: Add a new user
 *     summary: Add a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/User'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Fail    
 */
export const POST = async (req: Request, res: Response) => {
    try {
        const UserRepo = await getRepo(User);
        const { phone, email, password } = await req.json();

        if (!phone) NextResponse.json({ message: "Phone number is required" }, { status: HTTP_STATUS.Forbidden })
        if (!email) NextResponse.json({ message: "Email is required" }, { status: HTTP_STATUS.Forbidden });
        if (!password) NextResponse.json({ message: "Password is required" }, { status: HTTP_STATUS.Forbidden })

        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User();
        newUser.phone = phone;
        newUser.email = email;
        newUser.password = passwordHash;
        const data = await UserRepo.save(newUser);
        return NextResponse.json(data, { status: HTTP_STATUS.Created });
    } catch (error) {
        return NextResponse.json({ message: "Server Error", error }, { status: HTTP_STATUS.ServerError });
    }
}



/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties: 
 *         phone:
 *           type: string
 *         email: 
 *           type: string
 *         password:
 *           type: string
 *       example:
 *         phone: "85421654781"
 *         email: "example@mail.com"
 *         password: "12345678"     
 *     Login:
 *       type: object
 *       properties: 
 *         email: 
 *           type: string
 *         password:
 *           type: string
 *       example:
 *         email: "example@mail.com"
 *         password: "12345678"     
 */