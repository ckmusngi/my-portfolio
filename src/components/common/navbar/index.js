import React, { useState } from 'react'
import './index.css'
import reactScroll from 'react-scroll'
import resume from '../../assets/cv.png'
import sun from '../../assets/sun.png'
import cv from '../../assets/resume.pdf'
import menu from '../../assets/menu.png'

export default function Navbar({toggleTheme, theme}) {
  const [showMenu, setShowMenu] = useState(false)
  const downloadFile = () => {
    const fileName = 'Resume'
    const aTag = document.createElement('a')
    aTag.href = cv
    aTag.download = fileName
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  return (
    <nav className="navbar" id={theme}>
        <reactScroll.Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500}><p className='navbarHome'>KIEL MUSNGI</p></reactScroll.Link>
        <div className='navbarMenu'>
            <reactScroll.Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='navbarMenuListItem'>About</reactScroll.Link>
            <reactScroll.Link activeClass='active' to='services' spy={true} smooth={true} offset={-100} duration={500} className='navbarMenuListItem'>Services</reactScroll.Link>
            <reactScroll.Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='navbarMenuListItem'>Projects</reactScroll.Link>
            <reactScroll.Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='navbarMenuListItem'>Contact</reactScroll.Link>
        </div>
        <div className='extraMenu'>
          <img src={sun} alt='sun' className='sunImg' onClick={() => toggleTheme('dark')}/>
          <button className="navBarMenuBtn" onClick={() => downloadFile()}> <img src={resume} alt="btnImage" className="btnImg"/>Resume</button>
        </div>

        <img src={menu} alt="menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
        <div className='mobNavMenu' style={{display: showMenu ? 'flex' : 'none'}}>
            <reactScroll.Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(!showMenu)}>About</reactScroll.Link>
            <reactScroll.Link activeClass='active' to='services' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(!showMenu)}>Services</reactScroll.Link>
            <reactScroll.Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(!showMenu)}>Projects</reactScroll.Link>
            <reactScroll.Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} className='listItem' onClick={() => setShowMenu(!showMenu)}>Contact</reactScroll.Link>
            <reactScroll.Link className='listItem' onClick={() => downloadFile()}>Resume</reactScroll.Link>
        </div>
        
    </nav>
  )
}
