import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { useNavigate } from 'react-router';
import { useUtils } from '../context/UtilsContext';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const {setIsSidebar , isSidebar , mobileShow , setMobileShow} = useUtils();

  useEffect(() =>{
    console.log({isSidebar , mobileShow});
  },[isSidebar]);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if ((event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handleSidebar=() =>{
    if(window.innerWidth <= 1200){
      setIsSidebar(!isSidebar);
      setMobileShow(!mobileShow);
    }

    setIsSidebar(!isSidebar);
  }
  return (
    <div className='flex justify-between px-6 py-2 fixed top-0 w-[100%] bg-white'>
      <div className='flex items-center space-x-4'>
        <AiOutlineMenu className='text-2xl cursor-pointer ' onClick={handleSidebar} />
        <img src="ytlogo.jpg" width='117px' height='28px' className='cursor-pointer' />
      </div>
      <div className=' w-[30%] flex items-center' >
        <div className='w-[100%] px-5 py-2 border rounded-l-full border-gray-400'>
          <input
            type="text"
            placeholder='Search'
            className='outline-none'
            onChange={(e)=> setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button 
        className='px-4 py-2 border border-gray-400 bg-gray-100 rounded-r-full'
        onClick={()=> searchQueryHandler("searchButton")}
        >
          <CiSearch size={"24px"} />
          </button>
        <IoMdMic size={"42px"}
          className='ml-3 p-2 cursor-pointer border rounded-full bg-gray-50 hover:bg-gray-200 duration-100'
        />
      </div>
      <div className=' flex items-center'>
        <RiVideoAddLine size={"28px"} className='mr-5 ' />
        <AiOutlineBell size={"28px"} className='mr-3' />
        <img src="gmail2.png" width="46px" height="46px" />
      </div>
    </div>
  )
}

export default Navbar;