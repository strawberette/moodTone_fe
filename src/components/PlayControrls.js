import React from 'react'; 
import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { FaPlay,FaPause, FaBackward,FaForward, FiHeart,BsHeartFill} from "react-icons/ai";


function PlayControrls() {
  const [song, setSong] = useState({});
  const [mood, setMood] = useState(""); 
  const [favoriteTrack,setFav] = useState([]);
  
  const [isPlaying,setIsPlaying]=useState(false);
  
  const limit = 10;
  const random = Math.floor(Math.random() * limit + 1);
  const baseURL = `https://api.jamendo.com/v3.0/tracks/?client_id=${process.env.REACT_APP_CLIENT_ID}&format=jsonpretty&limit=${limit}&fuzzytags=${mood}&speed=high%2Bveryhigh&include=musicinfo&groupby=artist_id`;

  const playSong =()=>{
    
  }

  // const audioPlaying =()=>[isPlaying, useState(false)]


  const handleMood = (e) => setMood(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(baseURL);
      const songList = await response.json();
      setSong(songList.results[random]);
    } catch (err) {
      console.log(err);
    }
  }; 

 
  return <div>PlayControrls
      <audio src='baseURL'></audio>
      <button className='paly-btn' onClick={(isPlaying)=>setSong(!audioPlaying)}>
        <FaPlay/><FaPause/>
      </button> 
        
      

      <button className='fav-track' onClick={(favoriteTrack)=>{setFav}}>
      favorite song
      <FiHeart/><BsHeartFill/>
      </button>

  </div>; 
 
}

export default PlayControrls;

