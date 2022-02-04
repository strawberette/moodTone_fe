import React from 'react'; 
import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons' 

function PlayControrls() {
  const [song, setSong] = useState({});
  const [mood, setMood] = useState("");

  const limit = 10;
  const random = Math.floor(Math.random() * limit + 1);
  const baseURL = `https://api.jamendo.com/v3.0/tracks/?client_id=${process.env.REACT_APP_CLIENT_ID}&format=jsonpretty&limit=${limit}&fuzzytags=${mood}&speed=high%2Bveryhigh&include=musicinfo&groupby=artist_id`;

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

  const audioPlaying =()=>[isPlaying, useState(false)]


 
  return <div>PlayControrls
      <audio src='baseURL'></audio>
      <button className='paly-btn' onClick={(isPlaying)=>setSong(!audioPlaying)}>
        <FontAwesomeIcon icon={faPlay}/><FontAwesomeIcon icon={faPause}/>
      </button> 

      <button className='fav-song'>
        fave song
      </button>

  </div>; 
 
}

export default PlayControrls;
