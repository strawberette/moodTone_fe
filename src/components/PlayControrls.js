import React from 'react'; 
import { useState } from 'react';
import { FaPlay,FaPause, FaBackward,FaForward, FiHeart,BsHeartFill} from "react-icons/ai";


function PlayControrls() {
  const [song, setSong] = useState({});
  const [mood, setMood] = useState(""); 
  const [favoriteTrack,setFav] = useState([]);
  
  const audioPlaying=()=>{
    const [isPlaying,setIsPlaying]=useState(false);
  }

  const togglePlayPause =()=>{
    setIsPlaying(isPlaying)
  }
  
  const favoriteTrack=()=>{
    setFav(favoriteTrack)
  }

  const forwardSong=()=>{
    fowardSong(curentSong+1)
  } 

  const backwardSong=()=>{
    backwardSong=(curentSong-1)
  }


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


 
  return <div>PlayControrls
      

    <image src="http[s]://api.jamendo.com/v3.0/artists/albums/?"></image>
    <h4>title</h4> 
    <h4>aritist</h4> 
    <h4>albume</h4> 
    <h4>mood</h4>

      <button className='backward-btn' >
      <FaBackward/> 
      </button>
      
      <audio src='baseURL'></audio>
      <button className='paly-btn' onClick={(togglePlayPause)=>setSong(!audioPlaying)}>
        {isPlaying}
        <FaPlay/><FaPause/>
      </button > 
      
      <button className='forward-btn' onClick={(fowardSong)} >
      <FaForward/> 
      </button>

      <button className='fav-track' onClick={(favoriteTrack)=>{setFav}}>
      favorite song
      <FiHeart/><BsHeartFill/>
      </button>

  </div>; 
 
}

export default PlayControrls;

