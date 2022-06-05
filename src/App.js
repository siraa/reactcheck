
import React from 'react';
import logo from './logo.svg';
import myImg from './imageInSrc.jpg';
import myVideo from './myVideo.mp4';
import './App.css';
import './Style.css';

function App() {
  return (
    <div>
    {/* <div style={{border:"solid 1px black",maxWidth:100}}> */}
<div><h1 className="titlered">****** Taysir *****</h1></div>

<br/>
<div>
<img src={myImg} alt ='imageInSrc' />
<br/>
<img src="/imageInPublic.jpg" alt ='imageInPublic'/>
</div>

{/* </div> */}
<video  src={myVideo} type="video/mp4" width="320" height="240" controls/>
{/* <source src="myVideo.mp4" type="video/mp4" /> */}

  </div>
  );
}

export default App;
