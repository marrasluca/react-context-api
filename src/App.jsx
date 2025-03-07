import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PostsList from './pages/Postslist';
import AboutUs from './pages/aboutUs';
import HomePage from './pages/HomePage'
import DefaultLayout from './layouts/DefaultLayout';
import SinglePosts from './pages/SinglePosts';

import { GlobalProvider } from './context/GlobalContext';

function App() {
 

  return (
    <>
    <GlobalProvider>
    <BrowserRouter>
        <Routes>
        <Route element={<DefaultLayout/>}>
          <Route path='/'element={<HomePage/>} />
          <Route path='/about-us' element={<AboutUs/>} />
          <Route path='/posts-list' element={<PostsList/>} />
          <Route path='/posts-list/:index' element={<SinglePosts/>} />
          </Route>
        </Routes>
    </BrowserRouter>
    </GlobalProvider> 
      
    </>
  )
}

export default App
