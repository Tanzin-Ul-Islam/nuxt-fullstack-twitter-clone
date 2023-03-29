import { sendError } from 'h3'
import Authorization from "../../service/auth"
export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    let response = await Authorization.registration(event, body);

    return {
        body: response
    }
}) 