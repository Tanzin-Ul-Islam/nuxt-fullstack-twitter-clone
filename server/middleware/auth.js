import UrlPattern from "url-pattern"
import { decodeJwtAccessToken } from "../utils/jwt";
import { sendError } from 'h3';
import UserModule from "../module/user";
export default defineEventHandler(async (event) => {
    const endpoints = [
        "/api/auth/user",
        "/api/tweets",
    ]
    const isHandledByThisMiddleware = endpoints.some((endpoint) => {
        const pattern = new UrlPattern(endpoint);
        return pattern.match(event.node.req.url);
    })
    if (!isHandledByThisMiddleware) {
        return;
    }
    const token = event.node.req.headers['authorization']?.split(' ')[1];
    const decodedToken = decodeJwtAccessToken(token);
    if (!decodedToken) {
        return sendError(event, createError({ statusCode: 401, statusMessage: "Invalid token!" }));
    }
    const user = await UserModule.getUserByUserId(decodedToken.userId);
    if (!user) {
        return sendError(event, createError({ statusCode: 401, statusMessage: "User not found!" }));
    }
    event.context.auth = { user };
})