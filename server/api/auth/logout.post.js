import Authorization from "../../service/auth";
import { parseCookies, setCookie } from 'h3';
export default defineEventHandler(async (event) => {
    const cookie = parseCookies(event);
    const token = cookie.refresh_token;
    const response = Authorization.logout(token);
    return {
        response
    }
})