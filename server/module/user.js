import { prisma } from "../db";

class UserModule {
    createUser = async (userData) => {
        try {
            //console.log(userData);
            const result = await prisma.user.create({
                data: userData
            });
            return result;
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UserModule 