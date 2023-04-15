import TweetService from '../../service/tweets';
export default defineEventHandler(async (event) => {
    const response = await TweetService.getTweetById(event);
    return {
        tweet: response
    }
})