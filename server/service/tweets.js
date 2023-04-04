import TweetModule from "../module/tweet";
import MediaFilesModule from "../module/mediaFiles";
import formidable from "formidable";
import { uploadToCloudinary } from "../utils/cloudinary";
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
}

export default new TweetService;