import jwt from "jsonwebtoken";

const config = useRuntimeConfig();

export function generateJwtAccessToken(user) {
    const token = jwt.sign({ userId: user.id }, config.jwtAccessSecret, { expiresIn: '3h' });
    return token;
}
function generateJwtRefreshToken(user) {
    const token = jwt.sign({ userId: user.id }, config.jwtRefreshSecret, { expiresIn: '4h' });
    return token;
}

export function decodeJwtAccessToken(token) {
    const response = jwt.verify(token, config.jwtAccessSecret);
    return response;
}
export function decodeJwtRefreshToken(token) {
    const response = jwt.verify(token, config.jwtRefreshSecret);
    return response;
}

export function generateJwtTokens(user) {
    const jwtAccessToken = generateJwtAccessToken(user);
    const jwtRefreshToken = generateJwtRefreshToken(user);

    return {
        jwtAccessToken,
        jwtRefreshToken
    }

}

export function sendRefreshToken(event, token) {
    setCookie(event, "refresh_token", token, {
        httpOnly: true,
        sameSite: true
    })
}