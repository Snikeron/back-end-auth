const auth = require('../auth/util')

describe('authenticate user func', () => {


    // passes on correct email and correct password
    test('authenticates valid user', () => {
        const email = 'test1@mail.com'
        const password = 'password123'

        const result = auth.isAuthenticUser(email, password)
        expect(result).toBe(true)
    })

    // passes on incorrect email
    test('authenticates valid email', () => {
        const email = 'test3@mail.com'
        const password = 'password123'

        const result = auth.isAuthenticUser(email, password)
        expect(result).toBe(false)
    })
    // passes on correct email but incorrect password
    test('authenticates valid email and password', () => {
        const email = 'test1@mail.com'
        const password = 'WRONG'

        const result = auth.isAuthenticUser(email, password)
        expect(result).toBe(false)
    })
    // passes on incorrect email but correct password
    test('authenticates valid email and password', () => {
        const email = 'test3@mail.com'
        const password = 'password123'

        const result = auth.isAuthenticUser(email, password)
        expect(result).toBe(false)
    })
    // passes on undefined email and correct password
    test('authenticates valid email and password', () => {
        const email = undefined
        const password = 'password123'

        const result = auth.isAuthenticUser(email, password)
        expect(result).toBe(false)
    })
    // passes on correct email but undefined password
    test('authenticates valid email and password', () => {
        const email = 'test1@mail.com'
        const password = undefined

        const result = auth.isAuthenticUser(email, password)
        expect(result).toBe(false)
    })
    // passes on correct email and empty string password
    test('authenticates valid email and password', () => {
        const email = 'test1@mail.com'
        const password = ''

        const result = auth.isAuthenticUser(email, password)
        expect(result).toBe(false)
    })

})

