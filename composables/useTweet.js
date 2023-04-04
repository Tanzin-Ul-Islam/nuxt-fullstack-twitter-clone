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
            const { data, pending, error, refresh } = await useFetch(config.BASEURL + api.tweets.post, {
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
    return {
        postTweet
    }
}