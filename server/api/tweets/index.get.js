import TweetService from '../../service/tweets';
export default defineEventHandler(async (event) => {
    const response = await TweetService.getTweets(event);
    return {
        tweets: response
    }
})