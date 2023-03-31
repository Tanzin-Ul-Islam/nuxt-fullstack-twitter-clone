import Authorization from "../../service/auth";
export default defineEventHandler(async (event) => {
    let body = await readBody(event);
    let response = await Authorization.login(event, body);
    return {
        response: response
    }
})