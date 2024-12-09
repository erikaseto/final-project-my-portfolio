
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageList from './components/ImageList.js'
import ResumeDetail from './components/ResumeDetail.js'
import Head from './components/Head.js'


// Root component
function App(props){
  const [isParagraphVisible, setParagraphVisible] = useState(true);

  const toggleParagraphVisibility = () => {
    setParagraphVisible(prevState => !prevState); // toggle <p> visibility
  };

    return (
      <Router>
        <div className="App">
        <h2 className="grid-title">About me</h2>
        
        {isParagraphVisible && (
          <div id="aboutme"><p>Hi, I'm Erika Seto. I grew up in the Greater Boston Area and I am a current Masters of Software Development student 
          at Boston University. I also work in the healthcare industry. 
          </p>
          <p>In my free time, I enjoy traveling, photography, and love trying new types of food. 
          I also enjoy watching TV shows and movies. I'm currently watching Culinary Class Wars on Netflix.
          </p>
          <p>Click the "Photos" button below to see some of the photographs I've taken. And click the "Resume" button below 
          to see my resume.</p></div>
        )}

        {/* click to trigger visibility */}
        <button onClick={toggleParagraphVisibility}>
          {isParagraphVisible ? 'Hide "About Me"' : 'Show "About Me"'}
        </button>

            <Head id="route-button"></Head>
              <div className="App2">
              <Routes>
                <Route path="/" element={<ImageList />} />
                <Route path="/experience" element={<ResumeDetail />} />
                
              </Routes>
              </div>
        </div>
        </Router>
    );
}

export default App;
