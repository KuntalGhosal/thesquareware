import React from 'react'
import '../Footer/Footer.css'
import Instagram from '../../assets/Pfad 40@2x.png';
import Twiter from '../../assets/Pfad 39@2x.png'
import Facebook from '../../assets/Pfad 38@2x.png'
export default function Footer() {
    return (
        <div className="footer-main">
            <div className="one" >
                <ul className="first-div">
                    <li>About</li>
                    <li>FAQ</li>
                    <li>Contact</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="second-div">
                <img src={Instagram} />
                <img src={Twiter} />
                <img src={Facebook} />

            </div>
        </div>
    )
}
