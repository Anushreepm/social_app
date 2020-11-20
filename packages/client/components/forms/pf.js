import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import useForm from '../util.js/hooks'

// const useForm = (callback, initialState = {}) => {
//     const [values, setValues] = useState(initialState)

//     const onChange = (event) => {
//         setValues({ ...values, [event.target.name]: event.target.value })
//     }

//     const onSubmit = (event) => {
//         event.preventDefault()
//         callback()
//     }

//     return {
//         onChange,
//         onSubmit,
//         values,
//     }
// }
// const FETCH_POSTS_QUERY = gql`
//     {
//         getPosts {
//             id
//             body
//             createdAt
//             username
//         }
//     }
// `

function PostForm() {
    // const { values, onChange, onSubmit } = useForm(createPostCallback, {
    //     body: '',
    // })

    // const [createPost] = useMutation(CREATE_POST_MUTATION, {
    //     variables: values,
    //     update(proxy, result) {
    //         const data = proxy.readQuery({
    //             query: FETCH_POSTS_QUERY,
    //         })
    //         data.getPosts = [result.data.createPost, ...data.getPosts]
    //         proxy.writeQuery({ query: FETCH_POSTS_QUERY, data })
    //         values.body = ''
    //     },
    // })

    // function createPostCallback() {
    //     createPost()
    // }

    return (
        // <input onSubmit={onSubmit}>
        //     <h2>Create a post:</h2>

        //     <input
        //         placeholder="Hi World!"
        //         name="body"
        //         onChange={onChange}
        //         value={values.body}
        //     />
        //     <input type="submit">Submit</input>
        // </input>
        <h1>hi this initialState</h1>
    )
}

// const CREATE_POST_MUTATION = gql`
//   mutation createPost($body: String!) {
//     createPost(body: $body) {
//       id
//       body
//       createdAt
//       username

//   }
// `

export default PostForm
