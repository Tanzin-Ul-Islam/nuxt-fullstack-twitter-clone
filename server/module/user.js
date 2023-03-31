import { prisma } from "../db";

class UserModule {
    createUser = async (userData) => {
        try {
            const response = await prisma.user.create({
                data: userData
            });
            return response;
        } catch (error) {
            console.log(error)
        }
    }

    getUserByUserName = async (userName) => {
        try {
            const response = await prisma.user.findUnique({
                where: {
                    userName
                }
            })
            return response;
        } catch (error) {
            return error;
        }
    }
}

export default new UserModule 