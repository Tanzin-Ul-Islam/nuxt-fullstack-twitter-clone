import { prisma } from "../db";
class TweetModule {
    createTweet = async (payload) => {
        const response = await prisma.tweet.create({
            data: payload
        })
        return response;
    }
    getTweets = async (payload = {}) => {
        const response = prisma.tweet.findMany({
            ...payload
        });
        return response;
    }
}

export default new TweetModule;