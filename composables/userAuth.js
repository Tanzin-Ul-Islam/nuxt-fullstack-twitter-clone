import { useFetch } from "nuxt/app"
import api from "../api_core/index.json";
import axios from "axios";
import jwt_decode from "jwt-decode";
export default () => {
    const useAuthToken = () => useState('auth_token');
    const useAuthUser = () => useState('auth_user');
    const useAuthLoading = () => useState('auth_loading', () => true);
    const config = useRuntimeConfig();

    //global states
    function setToken(token) {
        const authToken = useAuthToken();
        authToken.value = token;
    }
    function setUser(user) {
        const authUser = useAuthUser();
        authUser.value = user;
    }
    function setAuthLoading(state) {
        const authLoading = useAuthLoading();
        authLoading.value = state;
    }

    //handles login
    async function login(payload) {
        try {
            const { data, pending, error, refresh } = await useFetch(config.BASEURL + api.auth.login, {
                method: 'POST',
                body: payload
            });
            const { accessToken, user } = data.value.response;
            setToken(accessToken);
            setUser(user);
            return data.value;
        } catch (error) {
            console.log(error);
        }
    }

    //generates new access token
    async function refreshToken() {
        try {
            await axios.get(config.BASEURL + api.auth.refreshToken).then(response => {
                if (response.status == 200) {
                    setToken(response.data.access_token);
                }
            }).catch(error => {
                console.log(error)
            })
        } catch (error) {
            console.log(error);
        }
    }

    //regenerates access token when token expires till refresh token is valid
    function regenerateTokenAtExpire() {
        try {
            const authToken = useAuthToken();
            if (!authToken.value) {
                return;
            }
            const decodeAuthToken = jwt_decode(authToken.value);
            const tokenExp = decodeAuthToken.exp;
            const currentTime = Math.floor(Date.now() / 1000);
            const tokenExpiredTime = tokenExp - currentTime;
            const newRequstTime = (tokenExpiredTime * 1000);
            setTimeout(async () => {
                await refreshToken();
                regenerateTokenAtExpire();
            }, newRequstTime);
        } catch (error) {
            console.log(error)
        }
    }

    //gets user
    async function getUser() {
        try {
            const authToken = useAuthToken();
            if (!authToken.value) {
                return;
            }
            await axios.get(config.BASEURL + api.auth.user, {
                headers: {
                    "Authorization": 'Bearer ' + authToken.value
                }
            }).then(response => {
                if (response.status == 200) {
                    setUser(response.data.user);
                }
            }).catch(error => {
                console.log(error)
            })
        } catch (error) {
            console.log(error);
        }
    }
    //in every reload it is called and checks if the user is authenticated
    async function initAuth() {
        try {
            setAuthLoading(true);
            await refreshToken();
            await getUser();
            regenerateTokenAtExpire();
        } catch (error) {
            console.log(error);
        } finally {
            setAuthLoading(false);
        }
    }

    return {
        login,
        useAuthToken,
        useAuthUser,
        useAuthLoading,
        initAuth
    }

}