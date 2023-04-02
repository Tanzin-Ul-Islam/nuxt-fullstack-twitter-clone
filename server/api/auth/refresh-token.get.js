import { parseCookies, setCookie } from 'h3';
import Authorization from "../../service/auth";
export default defineEventHandler(async (event) => {
    const cookies = parseCookies(event);
    const refreshToken = cookies.refresh_token;
    if (!refreshToken) {
        return sendError(event, createError({ statusCode: 401, statusMessage: "Invalid token" }));
    }
    const response = await Authorization.getAccessTokenByRefreshToken(event, refreshToken);
    if(!response){
        return sendError(event, createError({ statusCode: 400, statusMessage: "Somethind went wrong!" }))
    }
    return {
        access_token: response
    }
})