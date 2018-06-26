isAuthenticUser = (email, password) => {
    const user = {
        email: 'test1@mail.com',
        password: 'password123'
    }
    if (email === user.email && password === user.password) {
        return true
    }
    return false
}

module.exports = {
    isAuthenticUser
}