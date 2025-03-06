import { Outlet } from "react-router-dom"

import Header from "../Components/Header"
import Footer from "../Components/Footer"

const DefaultLayout = () => {
    return (
       <>
       <Header />
       <Outlet />
       <Footer />
       
       </>
    )

    
}

export default DefaultLayout