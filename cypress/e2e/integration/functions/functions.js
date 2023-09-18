

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export function generateCredentials() {
    
        const usernameLength = 8;
        const passwordLength = 8;
        const username = generateRandomString(usernameLength);
        const password = generateRandomString(passwordLength);

        return { username, password };
    
}