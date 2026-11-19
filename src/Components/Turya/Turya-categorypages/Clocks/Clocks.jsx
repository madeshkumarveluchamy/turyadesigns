import React, { useEffect } from 'react';
import "./Clocks.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import NavBar from '../../../Navbar/Navbar';
// Clocks IMAGES

import AlchemistClock from './Clocks_Images/Alchemist.webp'
import FlowofTime from './Clocks_Images/Flow.webp'
import OreoClock from './Clocks_Images/Oreo.webp'
import TheBigClock from './Clocks_Images/The.webp'

// NEXT ARROW IMAGES

import NextArrow from './Clocks_Images/right-arrow.png'
import { useTranslation } from 'react-i18next';

export const Clocks = () => {
    const { t } = useTranslation('global');

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
         <NavBar className="custom-navbars" />
        <div className='turyadesign-Clocks-container'>

            {/* First Row Container - Clocks SECTIONS */}

            <div className="row turyaClocks-Clocks-Firstrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaClocks-Clocks-Firstcolumn">
                    <div className="turyaClocks-Clocks-Heading">
                        <h1>{t('turya-clocks')}</h1>
                    </div>
                    <div className="turyaClocks-Clocks-first-one">
                       <Link to="/Clock1"> <LazyLoadImage src={AlchemistClock} alt="" loading='lazy' /></Link> 
                    </div>
                    <div className="turyaClocks-Clocks-first-two">
                    <Link to="/Clock2"> <LazyLoadImage src={FlowofTime} alt="" loading='lazy' /> </Link> 
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaClocks-Clocks-Secondcolumn">
                    <div className="turyaClocks-Clocks-second-one">
                    <Link to="/Clock3"><LazyLoadImage src={OreoClock} alt="" loading='lazy' /> </Link>  
                    </div>
                    <div className="turyaClocks-Clocks-second-two">
                    <Link to="/Clock4"> <LazyLoadImage src={TheBigClock} alt="" loading='lazy' /></Link>  
                    </div>
                </div>
            </div>

            
            {/* Next Arrow Container */}


            <div className="turyaClocks-Clocks-NextArrow-container">
               <Link to="/Bedrooms" className='turyaClocks-Clocks-Next-Heading'> <h1 className='turyaClocks-Clocks-Next-Heading'>{t('turya-next')}</h1></Link>
               <Link to="/Bedrooms"> <LazyLoadImage className='turyaClocks-Clocks-Next-Arrow-img' src={NextArrow} alt="" loading='lazy' /></Link>
            </div>



        </div>
        </>
    )
}