import { prisma } from "../db";
class TweetModule {
    createTweet = async (payload) => {
        const response = await prisma.tweet.create({
            data: payload
        });
        return response;
    }
    getTweets = async (payload = {}) => {
        const response = await prisma.tweet.findMany({
            ...payload
        });
        return response;
    }
    getTweetById = async (id, params = {}) => {
        const response = await prisma.tweet.findUnique({
            ...params,
            where: {
                ...params.where,
                id: id
            }
        });
        return response;
    }
}

export default new TweetModule;