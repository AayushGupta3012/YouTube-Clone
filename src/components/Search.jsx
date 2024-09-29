import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { fetchData } from "../utils/rapidapi";
import Slidebar from './Sidebar';
import SearchCard from './SearchCard'

function Search() {
  const [result, setResult] = useState();
  const {searchQuery} = useParams();

  useEffect(()=>{
    fetchSearchResults();
  }, [searchQuery]);

  const fetchSearchResults = ()=>{
    fetchData(`search/?q=${searchQuery}`).then(({contents})=> {
      console.log(contents);
      setResult(contents);
    });
  };

  return (
    <div>
      <div className='mt-24 flex flex-row h-[calc(100%-56px)]'>
        <Slidebar/>
        <div>
          <div>
            {result?.map((item,index)=>{
              if(item?.type!=="video") return null;
              return <SearchCard key={index} video={item?.video}/>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;