import TweetModule from "../module/tweet";
import MediaFilesModule from "../module/mediaFiles";
import formidable from "formidable";
import { uploadToCloudinary } from "../utils/cloudinary";
import Transformer from '../transformer/transformer';

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
            // reply to
            const replyTo = fields.replyTo;
            if(replyTo && replyTo !== null){
                tweetData.replyToId = replyTo;
            }
            const tweet = await TweetModule.createTweet(tweetData);
            const mediaFiles = await Promise.all(
                Object.keys(files).map(async el => {
                    const file = files[el];
                    const cloudinaryData = await uploadToCloudinary(file.filepath);
                    return MediaFilesModule.createMediaFiles({
                        url: cloudinaryData.secure_url,
                        providerPublicId: cloudinaryData.public_id,
                        userId: user.id,
                        tweetId: tweet.id
                    })
                })
            )


            return tweet;
        } catch (error) {
            return
        }
    }

    getTweets = async (event) => {
        const response = await TweetModule.getTweets({
            include: {
                author: true,
                mediaFile: true,
                replies: {
                    include:{
                        author: true
                    }
                },
                replyTo: {
                    include:{
                        author: true
                    }
                }
            }
        });
        const filteredResponse = response.map(el=>{
            return Transformer.tweetTransformer(el);
        })
        return filteredResponse
    }
}

export default new TweetService;