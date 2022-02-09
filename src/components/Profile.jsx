import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import NavigationPage from "./NavigationPage";

const Profile = (props) => {
  const [data, setData] = useState([]);
  const [audio, setAudio] = useState();

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
  }, [props]);

  // const handleRemove = async (e) => {
  //   const baseURL = process.env.REACT_APP_BASE_URL;
  //   const payload = {
  //     trackId: data[e.target.getAttribute("idx")].id
  //   }
  //   console.log("e.target.getAttribute", data[e.target.getAttribute("idx")].id)
  //   await fetch(
  //     `${baseURL}/track/${props.user.id}?secret_token=${props.user.jwt}`, {
  //       method: "DELETE",
  //       mode: "cors",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: payload,
  //     }
  //   );
  // }

  if (!props.user) {
    return <Redirect to="/home" />;
  }

  return (
    <>
    <div>
      <NavigationPage />
      <table>
        <thead>
          <tr>
            <th>Mood</th>
            <th>Artist</th>
            <th>Song</th>
            <th>Artwork</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => {
            return (
              <tr key={i}>
                <td>{d.mood}</td>
                <td>{d.artist_name}</td>
                <td>
                  <button onClick={() => setAudio(d.audio)}>
                    {d.name}
                  </button>
                </td>
                <td>
                  <img src={d.album_image} alt="album cover" width="50px" />
                </td>
                {/* <td>
                  <button idx={i} onClick={handleRemove}>Remove</button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="mediaPlayer">
        <h1> Moodplayer </h1>
        <audio src={audio} autoPlay controls></audio>
      </div>
    </div>
    </>
  );
};
export default Profile;
