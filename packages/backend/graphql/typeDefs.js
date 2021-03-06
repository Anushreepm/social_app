const { gql } = require('apollo-server')

module.exports = gql`
    type Post {
        id: ID!
        body: String!
        title: String!
        createdAt: String!
        username: String!
    }
    type User {
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
    }
    input RegisterInput {
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    input updateTaskInput {
        body: String!
    }
    type Query {
        getPosts: [Post]
        getPost(postId: ID!): Post
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
        createPost(body: String!, title: String!): Post!
        deletePost(postId: ID!): String!
        updatePost(postId: ID!, input: updateTaskInput!): Post!
    }
`
