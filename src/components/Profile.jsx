import React, { useState, useEffect } from "react";
import NavigationPage from "./NavigationPage"; 

import happy from "../utility/fullhappy.png" 
import serene from "../utility/fullserene.png"

import "../App.css"

const Profile = (props) => {
  const [data, setData] = useState([]);
  const [audio, setAudio] = useState();
  const [deletedTrack, setDeletedTrack] = useState()

  useEffect(() => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const handleFetch = async () => {
      try {
        const response = await fetch(
          `${baseURL}/track/${props.user.id}?secret_token=${props.user.jwt}`
        );
        const trackList = await response.json();
        let originalData = [];

        await Promise.all(
          trackList.track.map(async (t) => {
            const res = await fetch(
              `https://api.jamendo.com/v3.0/tracks/?client_id=${process.env.REACT_APP_CLIENT_ID}&id=${t.trackId}`
            );
            let resJson = await res.json();
            const moodFetch = await fetch(
              `${baseURL}/mood/${t.MoodId}?secret_token=${props.user.jwt}`
            );
            const moodJson = await moodFetch.json();
            resJson = resJson.results[0];
            resJson.mood = moodJson.mood.moodName;

            originalData.push(resJson);
          })
        );
        setData(originalData);
      } catch (err) {
        console.log(err);
      }
    };
    handleFetch();
  }, [props, deletedTrack]);

  const handleRemove = async (e) => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const payload = JSON.stringify({
      trackId: data[e.target.getAttribute("idx")].id
    })

    try {
      const res = await fetch(
        `${baseURL}/track/${props.user.id}?secret_token=${props.user.jwt}`, {
          method: "DELETE",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: payload,
        }
      );

      const resJSON = await res.json()
      setDeletedTrack(resJSON.deletedTrack.id)
    } catch(err) {
      console.log(err)
    }

  }

  return (
    <>
    <div>
      <NavigationPage user={props.user} setUser={props.setUser}/>
      <br/>
      <br/> 
      <br/>
      <br/>
      <table>
        <thead>
          <tr className="profile">
            <th className="profileTable" >Mood</th>
            <th className="profileTable">Artist</th>
            <th className="profileTable">Song</th>
            <th className="profileTable">Artwork</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => {
            return (
              <tr key={i}>
                <td className="profileTable">{d.mood}</td>
                <td className="profileTable">{d.artist_name}</td>
                <td className="profileTable">
                  <button onClick={() => setAudio(d.audio)}>
                    {d.name}
                  </button>
                </td>
                <td className="profileTable">
                  <img src={d.album_image} alt="album cover" width="50px" />
                </td>
                <td>
                  <button idx={i} onClick={handleRemove}>Remove</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
          
      <div className="moodPlayer">
        <h1 className="moodPlayer"> Moodplayer </h1> 
        <br/> 
        <br/>
        <audio className="profilePlayer" src={audio} autoPlay controls></audio>
      </div>
    </div> 

    <div className="profilefull">
      <img 
        src={happy}
        className="fullhappy" 
        alt="happy"  
      ></img> 
      
      <img
        src={serene} 
        className=" fullserene"
        alt="serene"
      ></img> 
    </div>
    </>
  );
};
export default Profile;
