import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { allPosts } from './postlist'

const Submit = ({ createPost }) => {
    console.log(createPost)
    function handleSubmit(event) {
        event.preventDefault()
        const form = event.target
        console.log('form', event.target.title.value)
        const formData = new window.FormData(form)
        console.log('form data', formData)
        createPost(
            // formData.get('title'),
            // formData.get('body'),
            // formData.get('user')
            // event.target.title.value,
            event.target.body.value
            // event.target.user.value
        )
        form.reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <br />
            <input
                className="input"
                placeholder="body"
                name="body"
                type="text"
                required
            />

            <button className="button" type="submit">
                Create
            </button>
        </form>
    )
}

const createPost = gql`
    mutation createPost($body: String!, $title: String!) {
        createPost(input: { body: $body, title: $title }) {
            id
            body
            title
            user {
                id
                username
                createdAt
            }
        }
    }
`

export default graphql(createPost, {
    props: ({ mutate }) => ({
        createPost: (title, body, user) =>
            // createPost : (body) =>
            mutate({
                variables: { title, body, user },
                // variables : {body},
                update: (proxy, { data: { createPost } }) => {
                    const data = proxy.readQuery({
                        query: allPosts,
                    })
                    proxy.writeQuery({
                        query: allPosts,
                        data: {
                            ...data,
                            allPosts: [createPost, ...data.allPosts],
                        },
                    })
                },
            }),
    }),
})(Submit)
