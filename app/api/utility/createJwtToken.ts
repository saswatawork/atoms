import { sign } from "jsonwebtoken";
import { UserData } from "../entity/User";


export const createJwtToken = (user: UserData) => {
    const accessToken = sign({ email: user.email }, "jwssecret"); //ToDo : Move secret to the env file
    return accessToken;
}