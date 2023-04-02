import Transformer from "~~/server/transformer/transformer"
export default defineEventHandler(async (event) => {
    const user = Transformer.userTransformer(event.context.auth.user);
    return {
        user: user,
    }
})