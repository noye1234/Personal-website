import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import logo from './assets/noy.png';
import gitlogo from './assets/git.png';
import linkdinlogo from './assets/linkdin.png';
import letter from './assets/letter.png';


function App() {

  return (

      <div className="container">
      <div className="top-bar box" >
         <h1>Noy Elisha       </h1>
         <img src={logo} alt="logo" width={100} />

      </div>
      <div className="next-bar box" >
         <p style={{ fontSize: '24px' }}>Future Machine Learning Engineer | Passionate Developer</p>

      </div>
      <div className="About all">
        <h1>About me:</h1>
<p>
  Hi! I'm a Computer Science student specializing in <br/>Data Science and Artificial Intelligence.<br/>
  I'm passionate about solving real-world problems using data-driven<br/> approaches and machine learning techniques.<br/> 
  At the same time, I have a strong interest in software development<br/> and enjoy building intuitive and efficient applications.<br/>
</p>
<p>
  I'm constantly exploring the intersection between<br/> AI and development — whether it's creating smart tools,<br/> automating processes, or experimenting with deep learning models.<br/>
  I'm always eager to learn, grow, and contribute to impactful projects.<br/>
</p>
<p>
  Outside of tech, I love diving into creative ideas, staying curious,<br/> and collaborating with inspiring people.<br/></p>
       </div>
        <div className="projects all">
        <h1>projects:</h1>
        </div>
        <div className="link">
          <p ><a href="https://github.com/" style={{color: 'black;'}}><img src={gitlogo} alt="logo" width={30} /></a> 
         <a href="https://www.linkedin.com/in/noy-elisha-b3793b350?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank"><img src={linkdinlogo} alt="logo" width={30} /></a></p>

       </div>
      <div className="contact all">
        <h1>contact: </h1>
        <p>Email: noyelisha5@gmail.com</p>
        <p>Phone: 052-330-0102</p>
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>

      </div>
      <div className="recommendations">
        <h2>Recommendations: 
        <a href="/letter.pdf" target="_blank" rel="noopener noreferrer">
      
          <img src={letter} alt="letter" width={30} style={{ marginLeft: '12px' }} /> 
        </a>
        </h2>
        </div>

    </div>

  )
}

export default App



