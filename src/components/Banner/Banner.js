import React, { useEffect, useState } from 'react';
import {API_KEY, imageURL} from '../Constants/Constants'
import './Banner.css';
import { instance } from '../../Axios';

const Banner = () => {

  const [movie, setMovie] = useState({})
  useEffect(()=>
  {
    instance.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>
    {
      var randomInt = Math.floor(Math.random() * 21)
      console.log(response.data.results[0]);
      setMovie(response.data? response.data.results[randomInt]:'')
    })
  },[])

  return (
    
    <div style={{backgroundImage:`url(${imageURL+movie.backdrop_path})`}} className='banner'>
      <div className='content'>
        <h1 className='title'>{movie.title}</h1>
        <div className='banner_button'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
