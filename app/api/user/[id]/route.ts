import { NextResponse } from "next/server"
import { AppDataSource } from "../../AppDataSource";
import { User } from "../User";


const UserRepo = AppDataSource.getRepository(User)

/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     tags: 
 *       - User
 *     summary: Update user details
 *     description: Updates a user
 *     parameters:
 *       - in: path
 *         required: true
 *         name: id
 *         description: User id
 *         schema:
 *           type: string
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
export const PUT = async (req: Request, { params: { id } }: { params: { id: number } }) => {
    try {
        const { phone, email, password } = await req.json();
        const user = await UserRepo.findOneBy({ id });
        if (user) {
            user.phone = phone;
            user.email = email;
            user.password = password;
            const data = await UserRepo.save(user);
            return NextResponse.json({ message: "OK", data }, { status: 200 });
        }
        return NextResponse.json({ message: "Not found" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     tags: 
 *       - User
 *     summary: Deletes a user
 *     description: Deletes a user
 *     parameters:
 *       - in: path
 *         required: true
 *         name: id
 *         description: User id
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
        const userToRemove = await UserRepo.findOneBy({ id });
        if (userToRemove) {
            await UserRepo.remove(userToRemove);
            return NextResponse.json({ message: "OK" }, { status: 200 });
        }
        return NextResponse.json({ message: "Not found" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}