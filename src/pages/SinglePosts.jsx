import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

const SinglePosts = () => {


    const { id } = useParams()

    const [ posts, setPosts ] = useState({
        id:'',
        title:'',
        content:'',
        image:'',
        tags: []
    }
    )

    const url = import.meta.env.VITE_ENDP0INT_URL

    useEffect( () => {
            axios.get(url + '/' + id)
            .then( res => setPosts(res.data))
            .catch( err => console.err(err) )
    },  [id])
    return (
        <h1>Singolo Post: { posts.title}</h1>
    )
}

export default SinglePosts