import { useRouter } from 'next/router'

const Feed = () => {
    const router = useRouter()
    const { pid } = router.query

    return <p>Feed goes here {pid}</p>
}

export default Feed
