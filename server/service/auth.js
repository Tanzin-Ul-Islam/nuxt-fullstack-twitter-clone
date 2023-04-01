import { sendError } from 'h3';
import UserModule from '../module/user';
import RefreshTokenModule from '../module/refreshToken';
import bcrypt from 'bcrypt';
import Transformer from "../transformer/transformer";
import {generateJwtTokens, sendRefreshToken} from '../utils/jwt';
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
                console.log(userData.id);
                await RefreshTokenModule.createRefreshToken({ token: jwtRefreshToken, userId: userData.id });
                sendRefreshToken(event, jwtRefreshToken)
                return {
                    accessToken: jwtAccessToken,
                    user: userData
                }
            } else {
                return sendError(event, createError({ statusCode: 401, statusMessage: 'username or password is invalid!' }));
            }
        } else {
            return sendError(event, createError({ statusCode: 400, statusMessage: 'User not created.' }));
        }
    }
}

export default new Authorization