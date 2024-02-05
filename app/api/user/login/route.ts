import { NextResponse } from "next/server"
import bcrypt from 'bcrypt';
import { AppDataSource } from "../../AppDataSource";
import { User } from "../User";
import { HTTP_STATUS } from "../../config/httpStatus";


const UserRepo = AppDataSource.getRepository(User)

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     tags: 
 *       - User
 *     summary: Login for user
 *     description: Login gateway for user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#components/schemas/Login'
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Fail    
 */
export const POST = async (req: Request) => {
    try {
        console.log("req before")
        const { email, password } = await req.json();
        const user = await UserRepo.findOneBy({ email });
        console.log("user", user)
        if (!user) {
            return NextResponse.json({ message: "User doesn't exist" }, { status: HTTP_STATUS.BadRequest });
        }

        const dbPassword = user.password;
        const passwordMatched = await bcrypt.compare(password, dbPassword);

        if (!passwordMatched) {
            return NextResponse.json({ message: "Wrong password, please try again!" }, { status: HTTP_STATUS.Forbidden });
        }
        var returnedUser = Object.assign({}, user, { password: undefined })
        return NextResponse.json({ message: "OK", user: returnedUser }, { status: HTTP_STATUS.Success });
    } catch (error) {
        console.log("error", error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}