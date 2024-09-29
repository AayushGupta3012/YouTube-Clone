import React from 'react';
import {Route , Routes} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import PlayingVideo from './components/PlayingVideo';
import Search from './components/Search';
import { useAuth } from './context/Authprovider';
import Loading from './components/loader/Loading';

function App() {
  const {loading} = useAuth();
  return (
    <div>
      {loading && <Loading/>}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="search/:searchQuery" element ={<Search/>}/>
        <Route path="video/:id" element={<PlayingVideo/>}/>
      </Routes>
    </div>
  )
}
export default App;