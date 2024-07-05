import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../Components/TitleCards/TitleCards'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
      <img src={hero_banner} alt="hero_banner"  className='banner_img'/>
      <div className="hero-caption">
        <img src={hero_title} alt="hero_title" className='caption_img' />
        <p>The Protector" follows Kham, a martial artist, as he fights 
          criminals in Sydney to rescue his stolen elephants, showcasing
           intense action and loyalty</p>
           <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
           </div>
           <TitleCards/>
      </div>
      </div>
      <div className="more-cards">
        <TitleCards  title={"Blockbuster Movies"} category={"now_playing"}/>
        <TitleCards  title={"Only on Netflix"}  category={"popular"}/>
        <TitleCards  title={"Upcoming"}  category={"upcoming"}/>
        <TitleCards  title={"Top pics for you"}  category={"top_rated"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
