import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";



const PostsList = () => {

    const [posts, setPosts] = useState([]);

    const url = import.meta.env.VITE_ENDP0INT_URL

    useEffect( () => {
        axios
        .get(url)
        .then ( (res) => setPosts(res.data))
        .catch( (err) => console.error(err))
    }, []);

    return (
        <>
        <h1>Lista posts</h1>

        <div className="container">
            <div className="row">
                {
                    posts.map((elem) => {

                        const { id, title, content, image, tags } = elem
                        return (
                            <div className="col-3"   key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">{title}</h4>
                                        <p className="card-text">{tags}</p>

                                        <NavLink to={'/posts-list/' + id}>
                                            <button>Vai al post</button>
                                        </NavLink>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }



            </div>
        </div> 
        </>
      
    )
    
}

export default PostsList