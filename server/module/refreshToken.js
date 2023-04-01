import { prisma } from "../db";
class RefreshTokenModule {
    createRefreshToken = async (payload) => {
        await prisma.refreshToken.create({
            data: payload
        })
    }
}
export default new RefreshTokenModule