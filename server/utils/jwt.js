import jwt from "jsonwebtoken";

const config = useRuntimeConfig();

function generateJwtAccessToken(user) {
    let token = jwt.sign({userId: user.id}, config.jwtAccessSecret, {expiresIn: '20min'});
    return token;
}
function generateJwtRefreshToken(user) {
    let token = jwt.sign({userId: user.id}, config.jwtRefreshSecret, {expiresIn: '4h'});
    return token;
}

export default function generateJwtTokens(user) {
    const jwtAccessToken = generateJwtAccessToken(user);
    const jwtRefreshToken = generateJwtRefreshToken(user);

    return {
        jwtAccessToken,
        jwtRefreshToken
    }

}