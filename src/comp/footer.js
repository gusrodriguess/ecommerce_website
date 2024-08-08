import React from 'react'
import './footer.css'
import { FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet } from "react-icons/fa";

const Footer = () => {
    return (
    <>
        <div className='footer'>
            <div className='container'>
                <div className='left-box'>
                    <div className='box'>
                        <div className='icon-box'>
                            <FaPiggyBank />
                        </div>
                        <div className='detail'>
                            <h3> Great Saving </h3>
                            <p> Lorem ipsum dolor sit amet </p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon-box'>
                            <FaShippingFast />
                        </div>
                        <div className='detail'>
                            <h3> Free delivery </h3>
                            <p> Lorem ipsum dolor sit amet </p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon-box'>
                            <FaHeadphonesAlt />
                        </div>
                        <div className='detail'>
                            <h3> 24x7 support </h3>
                            <p> Lorem ipsum dolor sit amet </p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='icon-box'>
                            <FaWallet />
                        </div>
                        <div className='detail'>
                            <h3> Money Back </h3>
                            <p> Lorem ipsum dolor sit amet </p>
                        </div>
                    </div>
                </div>
                <div className='right-box'>
                    <div className='header'>
                        <img src='image/logo.webp' alt=''></img>
                        <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis </p>
                    </div>
                    <div className='bottom'>
                        <div className='box'>
                            <h3> Your Account </h3>
                            <ul>
                                <li> About us </li>
                                <li> Account </li>
                                <li> Payment </li>
                                <li> Sales </li>
                            </ul>
                        </div>
                        <div className='box'>
                            <h3> Products </h3>
                            <ul>
                                <li> Delivery </li>
                                <li> Track Oder </li>
                                <li> New Product </li>
                                <li> Old Product </li>
                            </ul>
                        </div>
                        <div className='box'>
                            <h3> Contact us </h3>
                            <ul>
                                <li> 4005, Silver Business PointIndia </li>
                                <li> +(012)999999999 </li>
                                <li> info@gmail.com </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Footer