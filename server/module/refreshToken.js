import { prisma } from "../db";
class RefreshTokenModule {
    createRefreshToken = async (payload) => {
        try {
            await prisma.refreshToken.create({
                data: payload
            });
        } catch (error) {
            return error;
        }
    }
    getRefreshToken = async (token) => {
        try {
            const response = await prisma.refreshToken.findUnique({
                where: {
                    token
                }
            });
            return response;
        } catch (error) {
            return error;
        }
    }
    deleteRefreshToken = async (token) => {
        try {
            const response = await prisma.refreshToken.delete({
                where: {
                    token: token
                }
            });
            return response;
        } catch (error) {
            return error;
        }
    }
}
export default new RefreshTokenModule