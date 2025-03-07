import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"

import { useGlobalContext } from "../context/GlobalContext";

const SinglePosts = () => {


    const { index } = useParams()

    // const initialObjectPost = {
    //     id:'',
    //     title:'',
    //     content:'',
    //     image:'',
    //     tags: []
    // }
    

    // const [ post, setPost ] = useState(initialObjectPost);

    // const url = import.meta.env.VITE_ENDP0INT_URL

    const { post, fetchSingolPosts } = useGlobalContext();


    

    useEffect( () => {
            // axios.get(url + '/' + index)
            // .then( res => setPosts(res.data))
            // .catch( err => console.err(err) )
            fetchSingolPosts(index)
    },  [index]);

    const { id, title, content, image, tags} = post;
    return (
        <h1>Singolo Post: {title} - {id}</h1>
    )
}

export default SinglePosts