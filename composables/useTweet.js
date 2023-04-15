import api from "../api_core/index.json"
import userAuth from "./userAuth";
export default () => {
    const config = useRuntimeConfig();
    const { useAuthToken } = userAuth();
    const token = useAuthToken();
    async function postTweet(payload) {
        try {
            let formData = new FormData();
            formData.append('text', payload.text);
            payload.mediaFiles.map((file, index) => {
                formData.append('media_filte_' + index, file);
            })
            const { data, pending, error, refresh } = await useFetch(config.BASEURL + api.tweets.requestUrl, {
                method: 'POST',
                body: formData,
                headers: {
                    "Authorization": "Bearer " + token.value
                }
            });
        } catch (error) {
            return
        }
    }
    async function getTweet() {
        try {
            const { data } = await useFetch(config.BASEURL + api.tweets.requestUrl, {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + token.value
                }
            });
            const { tweets } = data.value;
            return tweets;
        } catch (error) {
            console.log(error);
        }
    }
    async function getTweetById(id) {
        try {
            const { data } = await useFetch(config.BASEURL + api.tweets.requestUrl + '/' + id, {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer " + token.value
                }
            });
            const { tweet } = data.value;
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    return {
        postTweet,
        getTweet,
        getTweetById
    }
}