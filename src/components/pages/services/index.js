import React from 'react'
import './index.css'
import apiImg from '../../assets/api.png'
import uiuxImg from '../../assets/uiux.png'
import serverImg from '../../assets/server.png'
import debuggingImg from '../../assets/debugging.png'

export default function Services() {
  return (
    <section id='services'>
        <h1 className="skillTitle">Services</h1>
        <div className="skillBars">
            <div className="skills skillBar1">
                <img src={apiImg} alt="apiImg" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>API Integration</h2>
                </div>
            </div>
            <div className="skills skillBar2">
                <img src={uiuxImg} alt="feImg" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Front-End Development</h2>
                </div>
            </div>
            <div className="skills skillBar3">
                <img src={serverImg} alt="beImg" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Back-End Development</h2>
                </div>
            </div>
            <div className="skills skillBar4">
                <img src={debuggingImg} alt="beImg" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Debugging</h2>
                </div>
            </div>
        </div>
    </section>
  )
}
