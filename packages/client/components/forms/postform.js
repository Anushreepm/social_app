import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
`
const Input = styled.input`
    border: solid #edeef0;
    border-width: 0 0 2px 0;
    background: #fafbfb;
    outline: 0;
    height: 60px;
    font-size: 16px;
    color: #1b2b3d;
`
const FETCH_POSTS_QUERY = gql`
    {
        getPosts {
            id
            body
            createdAt
            username
        }
    }
`

const PostForm = function postform() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    //     const handleChange = (e) =>

    return (
        <Container>
            <Input type="text" onChange={handleChange} />
        </Container>
    )
}

const CREATE_POST_MUTATION = gql`
    mutation createPost($body: String!) {
        createPost(body: $body, title: $title, user: $user) {
            id
            body
            createdAt
            username
        }
    }
`

export default PostForm
