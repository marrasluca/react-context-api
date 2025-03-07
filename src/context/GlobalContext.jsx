import { createContext, useState, useContext } from "react";
import axios from "axios";





const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const url = import.meta.env.VITE_ENDP0INT_URL


// Funzione per recuperare i post tramite una richiesta GET
    const fetchPosts = () => {
        axios
        .get(url)
        .then ( (res) => setPosts(res.data))
        .catch( (err) => console.error(err))
    }



    const initialObjectPost = {
        id:'',
        title:'',
        content:'',
        image:'',
        tags: []
    }
    

    const [ post, setPost ] = useState(initialObjectPost);


 // Funzione per recuperare un singolo post tramite il suo id (index)    
const fetchSingolPosts  = (index) => {
    axios
    .get(url + '/' + index)
    .then( (res) => setPost(res.data))
    .catch( (err) => console.err(err) )
}

const value = {
    posts,
    post,
    fetchPosts,
    fetchSingolPosts 
}

return (
    <GlobalContext.Provider value= { value }>
        {children}
    </GlobalContext.Provider>
)
};

const useGlobalContext = () => useContext(GlobalContext)

export {
    GlobalProvider,
    useGlobalContext
}
