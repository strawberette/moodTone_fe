import React from 'react'; 
// import { FaPlay,FaPause, FaBackward,FaForward, FiHeart,BsHeartFill} from "react-icons/ai";


function PlayControls(props) {

  // const audioPlaying=()=>{
  //   const [isPlaying,setIsPlaying]=useState(false);
  // }

  // const togglePlayPause =()=>{
  //   setIsPlaying(isPlaying)
  // }
  
  // const favoriteTrack=()=>{
  //   setFav(favoriteTrack)
  // }

  // const forwardSong=()=>{
  //   fowardSong(curentSong+1)
  // } 

  // const backwardSong=()=>{
  //   backwardSong=(curentSong-1)
  // }


  // const limit = 10;
  // const random = Math.floor(Math.random() * limit + 1);
  // const baseURL = `https://api.jamendo.com/v3.0/tracks/?client_id=${process.env.REACT_APP_CLIENT_ID}&format=jsonpretty&limit=${limit}&fuzzytags=${mood}&speed=high%2Bveryhigh&include=musicinfo&groupby=artist_id`;

  // const handleMood = (e) => setMood(e.target.value);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(baseURL);
  //     const songList = await response.json();
  //     setSong(songList.results[random]);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };  

  const baseURL = process.env.REACT_APP_BASE_URL;
  const handleLike = async () => {
    try {
      const payload = JSON.stringify({
        trackId: props.song.id,
        moodId: props.mood.moodId,
      })
      await fetch(`${baseURL}/track/${props.user.id}?secret_token=${props.user.jwt}`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      });
    } catch (err) {
      console.log(err);
    }
  }

 
  return (
  
    <div>     
      <audio src={props.song.audio} controls autoPlay></audio>      

      <button onClick={handleLike}>
        favorite song
      </button>
  </div>
  )
 
}

export default PlayControls;

