import React from 'react'
import './index.css'

import coastalPowderCoating from '../../assets/cpcb.png'

export default function Projects() {
  return (
    <section id="projects">
      <h1 className='projectTitle'>Projects</h1>
          <div className="apiIntegrations">
            <h1 className='apiTitle'>API Integrations</h1>
            <div className="apiBars">
              <div className="projectBar">
                <h2 className='projBarTitle'>Xero Integration</h2>
                <p><a href='https://monday.com/' target='_blank' rel="noopener noreferrer">Monday.com</a> and <a href='https://www.xero.com/au/' target='_blank' rel="noopener noreferrer">Xero</a> Integration</p>
              </div>
              <div className="projectBar">
                <h2 className='projBarTitle'>Fortnox Integration</h2>
                <p><a href='https://monday.com/' target='_blank' rel="noopener noreferrer">Monday.com</a> and <a href='https://www.fortnox.se/' target='_blank' rel="noopener noreferrer">Fortnox</a> Integration</p>
              </div>
              <div className="projectBar">
                <h2 className='projBarTitle'>Ocula Integration</h2>
                <p><a href='https://www.monkeysoftware.com.au/' target='_blank' rel="noopener noreferrer">Optimate Touch</a> and <a href='https://www.hubspot.com/' target='_blank' rel="noopener noreferrer">Hubspot</a> Integration</p>
              </div>
              <div className="projectBar">
                <h2 className='projBarTitle'>Hubspot Integration</h2>
                <p><a href='https://www.hubspot.com/' target='_blank' rel="noopener noreferrer">Hubspot</a> and <a href='https://monday.com/' target='_blank' rel="noopener noreferrer">Monday.com</a> Integration</p>
              </div>
              <div className="projectBar">
                <h2 className='projBarTitle'>Body Catalyst</h2>
                <p><a href='https://www.zenoti.com/' target='_blank' rel="noopener noreferrer">Zenoti</a> and <a href='https://www.hubspot.com/' target='_blank' rel="noopener noreferrer">Hubspot</a> Integration</p>
              </div>
              <div className="projectBar">
                <h2 className='projBarTitle'>Ecoflo</h2>
                <p><a href='https://apiary.io/' target='_blank' rel="noopener noreferrer">Dear</a>, <a href='https://www.hubspot.com/' target='_blank' rel="noopener noreferrer">Hubspot</a> and <a href='https://www.ecwid.com/' target='_blank' rel="noopener noreferrer">Ecwid</a> Integration</p>
              </div>
              <div className="projectBar">
                <h2 className='projBarTitle'>Alemlube</h2>
                <p><a href='https://www.deputy.com/' target='_blank' rel="noopener noreferrer">Deputy</a> and <a href='https://monday.com/' target='_blank' rel="noopener noreferrer">Monday.com</a> Integration</p>
              </div>
              <div className="projectBar">
                <h2 className='projBarTitle'>Mentor List</h2>
                <p><a href='https://keap.com/' target='_blank' rel="noopener noreferrer">Keap</a> and <a href='https://monday.com/' target='_blank' rel="noopener noreferrer">Monday.com</a> Integration</p>
              </div>
              <div className="projectBar">
                <h2 className='projBarTitle'>SA Unique Electrical</h2>
                <p><a href='https://aroflo.com/' target='_blank' rel="noopener noreferrer">Aroflo</a> and <a href='https://www.hubspot.com/' target='_blank' rel="noopener noreferrer">Hubspot</a> Integration</p>
              </div>
            </div>
          </div>
          <div className="customWebsite">
            <h1 className='websiteTitle'>Websites</h1>
            <div className="webBars">
              <div className="webProjBar">
                <img src={coastalPowderCoating} alt='placeholder' className='webImg'/>
                <div className='projBar'>
                  <h2>Coastal Powder Coating</h2>
                  <p>A custom ERP Website with third party integration (Hubspot & Xero)</p>
                  <div className='projButtons'>
                    <button className='projButton' onClick={() => window.open('https://production.coastalpowder.upstreamtech.dev/', '_blank', 'noopener,noreferrer')}>Website</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>
  )
}
