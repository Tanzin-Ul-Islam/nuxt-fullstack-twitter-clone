import TweetService from "../../service/tweets";
export default defineEventHandler(async (event) => {
    const response = await TweetService.handleCreateTweet(event)
    return {
        res: response
    }
})