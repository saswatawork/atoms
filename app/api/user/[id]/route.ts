import { NextResponse } from "next/server"
import { User } from "../../entity/User";
import { getRepo } from "../../utility";


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
        const UserRepo = await getRepo(User);
        const { phone, email, password } = await req.json();
        const user = await UserRepo.findOneBy({ id });
        if (user) {
            user.phone = phone;
            user.email = email;
            user.password = password;
            const data = await UserRepo.save(user);
            return NextResponse.json(data, { status: 200 });
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
        const UserRepo = await getRepo(User);
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

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     tags: 
 *       - User
 *     description: Returns user details
 *     summary: User details
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
        const ProductRepo = await getRepo(User);
        const data = await ProductRepo.findOneBy({ id });
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}