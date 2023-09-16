import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import './index.css';



const LandingPage = () => {
  return (
    <div className='mainLandingContainer container'>
      <div className='row'>
        <div className="col-12 col-md-6 flexer">
          <h1>
          Welcome to MoneyMetrics! 🎉 
          </h1>
        <div className='notebox'>
         <b>Note: </b> This is a portfolio Project, not a commercial venture.
        </div>
        <div className='startAligner'>
        <b>Key points</b>
        </div>
        
        <ul>
          <li>
          All data is sourced responsibly from <a href='https://github.com/iamsyed21/MoneyMetrics-MERN_Dashboard_Using_MachineLearning/blob/main/data/data.js' target='_blank' rel="noreferrer"> Here</a>. so you can see what is being analyzed. 
          </li>
          <li>
          The dashboard provides a comprehensive range of charts, functioning as an extensive analytical resource. 
          </li>
          <li>
          For forward-looking insights, the prediction page in website employs an linear regression model to forecast next year's sales. This is done by manual calculation and not by using any Library.
          </li>
        </ul>
        </div>
        <div className="col-12 col-md-6 rigthside">
          <img alt='website logo' className='pictureLogo' src={logo}/>
         
            <button className='gotodashboardButton'>
            <Link
            to="/dashboard">
            Go To DashBoard🚀
            </Link>
          </button>
          
        
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
            🎥 Explore more of my projects or get in touch through my portfolio: <a target='_blank' rel="noreferrer" href='https://syedmoinahmed.dev/'>Here</a>. Have questions or just want to chat about AI? Feel free to reach out – I'm all ears (not literally)!
            </li>
            <li>
            📝 The source code for this entire project is available at Repository : <a target='_blank' rel="noreferrer" href='https://github.com/iamsyed21/MoneyMetrics-MERN_Dashboard_Using_MachineLearning'>Here</a>
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