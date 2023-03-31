import { sendError } from 'h3';
import UserModule from '../module/user';
import bcrypt from 'bcrypt';
import Transformer from "../transformer/transformer";
import generateJwtTokens from '../utils/jwt';
class Authorization {
    registration = async (event, req) => {
        const { userName, name, email, password } = req;
        if (!userName || !name || !email || !password) {
            return sendError(event, createError({ statusCode: 400, statusMessage: 'Invalid' }))
        } else {
            const salt = bcrypt.genSaltSync(10);
            let payload = {
                ...req,
                password: bcrypt.hashSync(req.password, salt)
            }
            const response = await UserModule.createUser(payload);
            return Transformer.userTransformer(response);
        }
    }

    login = async (event, req) => {
        let { userName, password } = req
        let response = await UserModule.getUserByUserName(userName);
        if (response) {
            let hashedPassword = response.password;
            let matchedPassword = bcrypt.compareSync(password, hashedPassword);
            if (matchedPassword) {
                const { jwtAccessToken, jwtRefreshToken } = generateJwtTokens(response);
                const userData = Transformer.userTransformer(response);
                return {
                    accessToken: jwtAccessToken,
                    refreshToken: jwtRefreshToken,
                    user: userData
                }
            } else {
                return sendError(event, createError({ statusCode: 401, statusMessage: 'Unauthorized' }));
            }
        } else {
            return sendError(event, createError({ statusCode: 400, statusMessage: 'User not created.' }));
        }
    }
}

export default new Authorization