import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default (req, res) =>
    NextAuth(req, res, {
        providers: [
            // for testing
            Providers.GitHub({
                clientId: process.env.GITHUB_CLIENT_ID,
                clientSecret: process.env.GITHUB_CLIENT_SECRET,
            }),
            // for production
            Providers.Email({
                server: {
                    host: process.env.SMTP_SERVER_HOST,
                    port: Number(process.env.SMTP_SERVER_PORT),
                    auth: {
                        user: process.env.SMTP_SERVER_USER,
                        pass: process.env.SMTP_SERVER_PASSWORD,
                    },
                },
                from: process.env.EMAIL_FROM,
            }),
        ],

        // debug: process.env.NODE_ENV === 'development',
        secret: process.env.AUTH_SECRET,
        jwt: {
            secret: process.env.JWT_SECRET,
        },
        // FIXME: correct addresses
        // pages: {
        // signIn: '/auth',
        // verifyRequest: '/auth/check-email', // (used for check email message)
        //     newUser: 'auth/onboard', // If set, new users will be directed here on first sign in
        // },
    })
