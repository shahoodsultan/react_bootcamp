import React from 'react'
import FooterLogo from "../../assets/imgs/logo.png"
import "./Footer2.css"
// import List from '../General/List'
// import Heading from '../General/Heading'
import facebook from "../../assets/imgs/facebook.png"
import X from "../../assets/imgs/twitter.png"
import LinkedIn from "../../assets/imgs/linkedIn.png"
import Insta from "../../assets/imgs/instagram.png"
// import Button from '../General/Button'


export default function footer2() {
  return (
    <div>
      <WholeFooter/>
    </div>
  )
}


function WholeFooter() {
    return (
        <div className='ft-main'>

            <div className="ft-div">

                <div className="Logo">
                    <img src={FooterLogo} alt="x" />
                    <div className='logo-text'>Insider's <span>Inventory</span></div>
                    <h3>Your Gateway to Real Estate Excellence</h3>
                </div>
                {/* <Button text="Trying" /> */}


                <div className="listAndSocials">
                    <List />

                    <div className="ft-socials">

                        <a href="https://www.facebook.com"><img src={facebook} alt="x" /></a>
                        <a href="https://www.facebook.com"><img src={X} alt="x" /></a>
                        <a href="https://www.facebook.com"><img src={LinkedIn} alt="x" /></a>
                        <a href="https://www.facebook.com"><img src={Insta} alt="x" /></a>

                    </div>

                </div>

            </div>

            <div className="rights">
                <hr />
                <p>All right are reserved For insider's Inventory</p>
            </div>

        </div>
    )
}


 function List() {
    return (
      <div className="nb-list">
      <ul>
          <li>Home</li>
          <li>Buyers</li>
          <li>Sellers</li>
          <li>Buy & hold</li>
          <li>Retail</li>
          <li>Flip Opportunities</li>
          <li>Off-Market Inventory</li>
      </ul>
  </div>
   )
  }