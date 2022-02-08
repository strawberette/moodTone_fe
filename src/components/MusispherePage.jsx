import "../App.css";

function MusispherePage() {
  return (
    <>
      <div className="musispherePage">
        <div className="colorKey" id="left-colors">
          <li className="keyColors">
            <div>
              <div className="colorBox" id="yellowBox" />
            </div>
            <div>
              <p>Yellow = Happy</p>
            </div>
          </li>
          <li className="keyColors">
            <div>
              <div className="colorBox" id="orangeBox" />
            </div>
            <div>
              <p>Orange = Energetic</p>
            </div>
          </li>
          <li className="keyColors">
            <div>
              <div className="colorBox" id="redBox" />
            </div>
            <div>
              <p>Red = Angry</p>
            </div>
          </li>
          <li className="keyColors">
            <div>
              <div className="colorBox" id="blackBox" />
            </div>
            <div>
              <p>Black = Powerful</p>
            </div>
          </li>
          <li className="keyColors">
            <div>
              <div className="colorBox" id="grayBox" />
            </div>
            <div>
              <p>Grey = Sad</p>
            </div>
          </li>
          <li className="keyColors">
            <div>
              <div className="colorBox" id="beigeBox" />
            </div>
            <div>
              <p>Beige = Cosy</p>
            </div>
          </li>
        </div>
        <div className="musisphere">
          <li className="segment green" />
          <li className="segment blue" />
          <li className="segment pink" />
          <li className="segment darkBlue" />
          <li className="segment purple" />
          <li className="segment white" />
          <li className="segment beige" />
          <li className="segment gray" />
          <li className="segment black" />
          <li className="segment red" />
          <li className="segment orange" />
          <li className="segment yellow" />
        </div>
        <div className="colorKey" id="right-colors">
          <li className="keyColors">
            <div>
              <div className="colorBox" id="greenBox" />
            </div>
            <div>
              <p>Green = Serene</p>
            </div>
          </li>
          <li className="keyColors">
            <div>
              <div className="colorBox" id="darkBlueBox" />
            </div>
            <div>
              <p>Dark Blue = Melancholic</p>
            </div>
          </li>
          <li className="keyColors">
            <div>
              <div className="colorBox" id="pinkBox" />
            </div>
            <div>
              <p>Pink = Romantic</p>
            </div>
          </li>
          <li className="keyColors">
            <div>
              <div className="colorBox" id="purpleBox" />
            </div>
            <div>
              <p>Purple = Spiritual</p>
            </div>
          </li>
          <li className="keyColors">
            <div>
              <div className="colorBox" id="blueBox" />
            </div>
            <div>
              <p>Blue = Calm</p>
            </div>
          </li>
          <li className="keyColors">
            <div>
              <div className="colorBox" id="whiteBox" />
            </div>
            <div>
              <p>White = Peaceful</p>
            </div>
          </li>
        </div>
      </div>
    </>
  );
}

export default MusispherePage;
