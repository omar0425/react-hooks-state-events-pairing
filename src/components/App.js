import videoData from "../data/video.js";
import Video from "./Video";


function App() {
  return (
    <div className='App'>
      {/* Video Component- Child App.js
      Video Details Component - Child of Video.js
      Video Comments Component- Child of Video.js
      Video Comment Component - Child of VideoComments.js */}
      <Video videoData= {videoData}/>
    </div>
  );
}

export default App;
