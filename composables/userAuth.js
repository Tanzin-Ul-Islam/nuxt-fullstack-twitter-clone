import { useFetch } from "nuxt/app"
import api from "../api_core/index.json";
export default () => {
    const useAuthToken = () => useState('auth_token');
    const useAuthUser = () => useState('auth_user');
    const config = useRuntimeConfig();
    const counter = useState('counter', () => Math.round(Math.random() * 1000))

    function setToken(token) {
        const authToken = useAuthToken();
        authToken.value = token;
    }
    function setUser(user) {
        const authUser = useAuthUser();
        authUser.value = user;
    }

    async function login(payload) {
        try {
            const { data, pending, error, refresh } = await useFetch(config.BASEURL + api.auth.login, {
                method: 'POST',
                body: payload
            });
            const {accessToken, user} = data.value.response;
            setToken(accessToken);
            setUser(user);
            return data.value;
        } catch (error) {
            console.log(error);
        }
    }
    return {
        login,
        useAuthToken,
        useAuthUser,
    }

}