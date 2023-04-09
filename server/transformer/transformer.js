import human from 'human-time';
class Transformer {
    userTransformer(data) {
        const { password, ...transformedData } = data;
        transformedData.handle = "@" + data.userName;
        return transformedData;
    }
    tweetTransformer(data) {
        const transformedData = {
            id: data.id,
            text: data.text,
            postedAt: human(data.createAt),
            author: data.author ? this.userTransformer(data.author) : null,
            mediaFiles: data.mediaFile ? data.mediaFile.map(el => {
                return this.mediaFilesTransformer(el);
            }) : [],
            replies: data.replies ? data.replies.map(el => {
                return this.tweetTransformer(el);
            }) : [],
            replyTo: data.replyTo ? this.tweetTransformer(data.replyTo) : null
        }
        return transformedData;
    }
    mediaFilesTransformer(data) {
        const { userId, tweetId, ...transformedData } = data;
        return transformedData;
    }
}

export default new Transformer;