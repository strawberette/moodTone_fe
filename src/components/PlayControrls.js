import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons' 
import LandingPage from './LandingPage'; 

function PlayControrls() { 
  return <div>PlayControrls
      <audio src='LandingPage'></audio>
      <button className='paly-btn'>
        <FontAwesomeIcon icon={faPlay}/>
      </button>
  </div>; 
 
}

export default PlayControrls;
