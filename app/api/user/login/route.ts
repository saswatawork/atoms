import { NextRequest, NextResponse } from "next/server"
import bcrypt from 'bcrypt';
import { User, UserData } from "../../entity/User";
import { HTTP_STATUS } from "../../config/httpStatus";
import { createJwtToken, getRepo } from "../../utility";
import { strict } from "assert";

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
export const POST = async (req: NextRequest) => {
    try {
        const UserRepo = await getRepo(User);
        const { email, password } = await req.json();
        const user = await UserRepo.findOneBy({ email }) as UserData | null;

        if (!user) {
            return NextResponse.json({ error: "User doesn't exist" }, { status: HTTP_STATUS.BadRequest });
        }

        const dbPassword = user.password;
        const passwordMatched = await bcrypt.compare(password, dbPassword);

        if (!passwordMatched) {
            return NextResponse.json({ error: "Wrong password, please try again!" }, { status: HTTP_STATUS.Forbidden });
        }


        var returnedUser = Object.assign({}, user, { password: undefined });

        const accessToken = createJwtToken(user)
        const response = NextResponse.json(returnedUser, { status: HTTP_STATUS.Success });
        response.cookies.set({ name: "access-token", value: accessToken, httpOnly: true, maxAge: 60 * 60 * 24 * 30, sameSite: "strict" });
        return response;
    } catch (error) {
        console.log("error", error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}