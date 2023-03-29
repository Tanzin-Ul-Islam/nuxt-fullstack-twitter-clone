import { sendError } from 'h3';
import UserModule from '../module/user';
import bcrypt from 'bcrypt'
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
            const response = await UserModule.createUser(payload)
            return response;
        }
    }
}

export default new Authorization