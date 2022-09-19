import React, { useEffect} from 'react'
import './Homepage.css'
import Toggle from './Toggle';
import { keepTheme } from './Theme';
import img from '../img.jpg'

function Homepage() {
  useEffect(() => {
    keepTheme();
})
  return (
    <div className='home-container'>
      <div className='nav-bar'>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
          <div className='toggle'>
            <p>Theme</p>
            <Toggle/>
          </div>
        </nav>
      </div>
      <section>
        <div className='bottom-div'>
          <div className='text-div'>
            <div className='name-div'>
              <h1>Hi!!</h1>
              <h2>I'm AJIBADE HAMIDAT ABISOLA</h2>
            </div>
          </div>
          <img src={img} alt='prof' style={{width:"400px", height:"500px"}}/>
        </div>
      </section>
    </div>
  )
}

export default Homepage

