const User = require('../../models/User')
const { UserInputError } = require('apollo-server')
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../../config')
const {
    validateRegisterInput,
    validateLoginInput,
} = require('../../util/validators')

function generateToken(user) {
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            username: user.username,
        },
        SECRET_KEY,
        { expiresIn: '1h' }
    )
}

module.exports = {
    Mutation: {
        async login(_, { username, password }) {
            const user = await User.findOne({ username })
            const { errors, valid } = validateLoginInput(username, password)
            if (!valid) {
                console.log('invalid')
                throw new UserInputError('User not found', { errors })
            }
            if (!user) {
                console.log('user block')
                throw new UserInputError('User not found', { errors })
            }

            const match = await bcrypt.compare(password, user.password)

            if (!match) {
                errors.general = 'Wrong credentials'
                throw new UserInputError('Wrong credentials', { errors })
            }

            const token = generateToken(user)

            return {
                ...user._doc,
                id: user._id,
                token,
            }
        },
        async register(
            _,
            { registerInput: { username, email, password, confirmPassword } },
            context,
            info
        ) {
            // validate user data
            const { valid, errors } = validateRegisterInput(
                username,
                email,
                password,
                confirmPassword
            )
            if (!valid) {
                throw new UserInputError('errors', { errors })
            }
            // check if user in unique
            const user = await User.findOne({ username })
            const userEmail = await User.findOne({ email })
            if (user) {
                throw new UserInputError('username is taken', {
                    errors: {
                        username: 'this username is taken',
                    },
                })
            }
            // check if email is unique
            if (userEmail) {
                throw new UserInputError('email is already taken', {
                    errors: {
                        userEmail: 'this email is already taken',
                    },
                })
            }
            // hash password
            password = await bcrypt.hash(password, 12)

            const newUser = await new User({
                email,
                username,
                password,
                createdAt: new Date().toISOString(),
            })
            const res = await newUser.save()
            const token = generateToken(res)
            return {
                ...res._doc,
                id: res._id,
                token,
            }
        },
    },
}
