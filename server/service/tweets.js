import TweetModule from "../module/tweet";
import formidable from "formidable";
class TweetService {
    handleCreateTweet = async (event) => {
        try {
            const form = formidable({});
            const response = await new Promise((resolve, reject) => {
                form.parse(event.node.req, (err, fields, files) => {
                    if (err) {
                        reject(err);
                    }
                    resolve({ fields, files });
                })
            });
            const { fields, files } = response;
            const user = event.context?.auth?.user;
            const tweetData = {
                authorId: user.id,
                text: fields.text,
            };
            const tweet = await TweetModule.createTweet(tweetData);
            return tweet;
        } catch (error) {
            return
        }
    }
}

export default new TweetService;