import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.png'
import './index.css';



const LandingPage = () => {
  return (
    <div className='mainLandingContainer container'>
      <div className='row'>
        <div className="col-12 col-md-6 flexer">
        Welcome to MoneyMetrics! 🎉 Just so you know, this is a portfolio project, not Wall Street. So relax, you're in for a fun, zero-cost tour of my finance nerdery.

You know how people say, "numbers don't lie"? Well, they don't, but they can be shy! MoneyMetrics helps your business figures step into the spotlight, but in a humble, "I'm-here-to-help-you" kind of way.

Ever heard of my Business Inventory Management app? Think of this as its nerdy cousin who loves finance and charts. Yep, MoneyMetrics is an analytical extension of that project.

Data here comes from "example.com"—no funny business, just good ol' numbers. The dashboard offers a smorgasbord of charts; think of it as an all-you-can-analyze buffet. Feeling adventurous? Our prediction page uses linear regression to offer a little crystal ball action for next year's sales.

So, loosen that tie, put on your “thinking cap," and let's give your numbers a fun spin. Welcome aboard! 😎
        </div>
        <div className="col-12 col-md-6 flexer">
          <img alt='website logo' src={logo}/>
        </div>

        
      </div>
      <div className='footer'>
      <div className='container footerContainer'>
      <div className='row'>
        <div className='col-12 contentFooterBox'>
          <ul>
            <li>
            👨‍💻 Developed using the M.E.R.N satck by me, Syed Moin Ahmed.
            </li>
            <li>
            🎥 Explore more of my projects or get in touch through my portfolio: <a target='_blank' rel="noreferrer" href='https://syedmoinahmed.dev/'>Here</a>. Have questions or just want to chat about your favorite movies? Feel free to reach out – I'm all ears (not literally)!
            </li>
            <li>
            📝 The source code for this entire project is available at Repository : <a target='_blank' rel="noreferrer" href='https://github.com/iamsyed21/Netflix-Clone-Frontend'>Frontend</a> | <a target='_blank' rel="noreferrer" href='https://github.com/iamsyed21/Netflix-Clone-Backend'>Backend</a> 
            </li>
            <li>
            🎛️ All the content of this website is uploaded, managed and track from the <b>Notflix Management Portal with analytics</b>: <a target='_blank' rel="noreferrer" href='https://FlexiDashPortal.syedmoinahmed.dev' >Here</a> | Source code: <a target='_blank' rel="noreferrer" href='https://github.com/iamsyed21/FlexiDash-VersatileAdminDashboard'>Here</a> 
            </li>
          </ul>

          <div className='footerDisclaimer'>
          🚀 Disclaimer: This website is as commercial as a cardboard spaceship – just a fun portfolio project, not for intergalactic streaming purposes! 🌌 🎬 All content is for demonstration and entertainment purposes only.
          <br/>
          © [2023] [syedmoinahmed.dev]. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
    </div>
   
    </div>
   
  
  )
}

export default LandingPage