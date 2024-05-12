import React, { useState } from "react";
import './home.css'
import { Link } from 'react-router-dom';
import Homeproduct from "./home_products";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";

const Home = () => {
    const [trendingProduct, setTredingProduct] = useState(Homeproduct)
    const filtercate = (x) => {
        const filterproduct = Homeproduct.filter((curElm) => {
            return curElm.type === x
        })
        setTredingProduct(filterproduct)
    }
    const allTrendingProduct = () => {
        setTredingProduct(Homeproduct)
    }
    return (
        <>
        <div className='home'>
            <div className='top_banner'>
                <div className='contant'>
                    <h3> silver aluminum </h3>
                    <h2> Apple Watch </h2>
                    <p> 30% off at your first odder </p>
                    <Link to='/shop' className='link'> Shop Now </Link>
                </div>
            </div>
            <div className='trending'>
                <div className='container'>
                    <div className='left_box'>
                        <div className='header'>
                            <div className='heading'>
                                <h2 onClick={() => allTrendingProduct()}> trending product </h2>
                            </div>
                            <div className='cate'>
                                <h3 onClick={() => filtercate('new')}> New </h3>
                                <h3 onClick={() => filtercate('featured')}> Featured</h3>
                                <h3 onClick={() => filtercate('top')}> top selling </h3>
                            </div>
                        </div>
                        <div className='products'>
                            <div className='container'>
                                {
                                    trendingProduct.map((curElm) => {
                                        return (
                                            <>
                                            <div className='box'>
                                                <div className='img_box'>
                                                    <img src={curElm.image} alt=''></img>
                                                    <div className='icon'>
                                                        <div className='icon_box'>
                                                            <AiFillEye />
                                                        </div>
                                                        <div className='icon_box'>
                                                            <AiFillHeart />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='info'>
                                                    <h3>{curElm.Name}</h3>
                                                    <p> ${curElm.price}</p>
                                                    <button className='btn'> Add to cart </button>
                                                </div>
                                            </div>
                                            </>
                                        )
                                    }) 
                                }
                            </div>
                            <button> Show More</button>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='right_container'>
                            <div className='testimonial'>
                                <div className='head'>
                                    <h3> our testimonial </h3>
                                </div>
                                <div className='detail'>
                                    <div className='img_box'>
                                        <img src='image/T1.avif' alt='testimonial'></img>
                                    </div>
                                    <div className='info'>
                                        <h3> stephan robot </h3>
                                        <h4> web designer</h4>
                                        <p> Duis faucibus enim vitae nunc molestie, nec facilisis arcu pulvinar nullam mattisr nullam mattis.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='newslatter'>
                                <div className='head'>
                                    <h3> newslatter </h3>
                                </div>
                                <div className='form'>
                                    <p> join our malling list </p>
                                    <input type='email' placeholder='E-mail' autoComplete='off'></input>
                                    <button> subscribe </button>
                                    <div className='icon_box'>
                                        <div className='icon'>
                                            <BiLogoFacebook />
                                        </div>
                                        <div className='icon'>
                                            <BiLogoTwitter />
                                        </div>
                                        <div className='icon'>
                                            <BiLogoInstagram />
                                        </div>
                                        <div className='icon'>
                                            <BiLogoYoutube />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='banners'>
                <div className='container'>
                    <div className='left_box'>
                        <div className='box'>
                            <img src='image/Multi-Banner-1.avif' alt='banner'></img>
                        </div>
                        <div className='box'>
                            <img src='image/Multi-Banner-2.avif' alt='banner'></img>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='top'>
                            <img src='image/Multi-Banner-3.webp' alt='banner'></img>
                            <img src='image/Multi-Banner-4.avif' alt='banner'></img>
                        </div>
                        <div className='bottom'>
                            <img src='image/Multi-Banner-5.webp' alt='banner'></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product_type'>
                <div className='container'>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;