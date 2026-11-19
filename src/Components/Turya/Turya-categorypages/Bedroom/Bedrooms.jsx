import React, { useEffect } from 'react';
import "./Bedrooms.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import NavBar from '../../../Navbar/Navbar';

// COTS IMAGES

import AsimpleCot from './Bedroom_Images/COTS/AsimpleCot.webp'
import AsymmetricalCot from './Bedroom_Images/COTS/Asymmetrical Clock.webp'
import ThetwinsCot from './Bedroom_Images/COTS/The twins.webp'
import TiledCot from './Bedroom_Images/COTS/Tiled Cot.webp'


// WARDROBE IMAGES

import MordernWardrobe from './Bedroom_Images/Wardrobe/Mordern Wardrobe.webp'
import AquaWardrobe from './Bedroom_Images/Wardrobe/Aqua Wardrobe.webp'
import BamboDance from './Bedroom_Images/Wardrobe/Bambo Dance.webp'
import BurntOchreMandarin from './Bedroom_Images/Wardrobe/Burnt Ochre Mandarin.webp'
import DaisyWardrobe from './Bedroom_Images/Wardrobe/Daisy Wardrobe.webp'
import DancingWreathsWardrobe from './Bedroom_Images/Wardrobe/Dancing Wreaths Wardrobe.webp'
import GlacialWardrobe from './Bedroom_Images/Wardrobe/Glacial Wardrobe.webp'
import HandpaintedWardrobe from './Bedroom_Images/Wardrobe/Handpainted Wardrobe.webp'
import OrientWardrobe from './Bedroom_Images/Wardrobe/Orient Wardrobe.webp'




// NEXT ARROW IMAGES

import NextArrow from './Bedroom_Images/right-arrow.png'
import { useTranslation } from 'react-i18next';

export const Bedrooms = () => {
      const { t } = useTranslation('global');
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
         <NavBar className="custom-navbars" />
        <div className='turyadesign-Bedrooms-container'>

            {/* First Row Container - DINNING SECTIONS */}

            <div className="row turyaBedrooms-Cots-Firstrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaBedrooms-Cots-Firstcolumn">
                    <div className="turyaBedrooms-Heading">
                        <h1>{t('turya-bedroom')}</h1>
                    </div>
                    <div className="turyaBedrooms-Cots-first-one">
                       <Link to="/Bedroom1"><LazyLoadImage src={AsimpleCot} alt="" loading='lazy' /> </Link> 
                    </div>
                    <div className="turyaBedrooms-Cots-first-two">
                    <Link to="/Bedroom2"> <LazyLoadImage src={AsymmetricalCot} alt="" loading='lazy' /></Link>   
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaBedrooms-Cots-Secondcolumn">
                    <div className="turyaBedrooms-Cots-second-one">
                    <Link to="/Bedroom3">  <LazyLoadImage src={ThetwinsCot} alt="" loading='lazy' /></Link>  
                    </div>
                    <div className="turyaBedrooms-Cots-second-two">
                    <Link to="/Bedroom4">  <LazyLoadImage src={TiledCot} alt="" loading='lazy' /></Link>  
                    </div>
                </div>
            </div>

           

            {/* Second Row Container - WARDROBE FirstInner SECTIONS */}

            <div className="row turyaBedrooms-Wardrobe1-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaBedrooms-Wardrobe1-Firstcolumn">
                    <div className="turyaBedrooms-Wardrobe1-first-one">
                    <Link to="/Bedroom5"><LazyLoadImage src={MordernWardrobe} alt="" loading='lazy' /> </Link>   
                    </div>
                    <div className="turyaBedrooms-Wardrobe1-first-two">
                    <Link to="/Bedroom6"><LazyLoadImage src={AquaWardrobe} alt="" loading='lazy' /> </Link>  
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaBedrooms-Wardrobe1-Secondcolumn">
                    <div className="turyaBedrooms-Wardrobe1-second-one">
                    <Link to="/Bedroom7"> <LazyLoadImage src={BamboDance} alt="" loading='lazy' /> </Link> 
                    </div>
                    <div className="turyaBedrooms-Wardrobe1-second-two">
                    <Link to="/Bedroom8"> <LazyLoadImage src={BurntOchreMandarin} alt="" loading='lazy' /></Link>  
                    </div>
                    <div className="turyaBedrooms-Wardrobe1-second-three">
                    <Link to="/Bedroom9">  <LazyLoadImage src={DaisyWardrobe} alt="" loading='lazy' /></Link> 
                    </div>
                </div>
            </div>

            {/* Second Row Container - WARDROBE SecondInner SECTIONS */}

            <div className="row turyaBedrooms-Wardrobe2-container">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaBedrooms-Wardrobe2-Firstcolumn">
                  
                  <div className="turyaBedrooms-Wardrobe2-first-one">
                  <Link to="/Bedroom10"> <LazyLoadImage  src={DancingWreathsWardrobe} alt="" loading='lazy'/> </Link> 
                  </div>
                  <div className="turyaBedrooms-Wardrobe2-first-two">
                  <Link to="/Bedroom11"><LazyLoadImage  src={GlacialWardrobe} alt="" loading='lazy'/> </Link> 
                  </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaBedrooms-Wardrobe2-Secondcolumn">
                  <div className="turyaBedrooms-Wardrobe2-second-one">
                  <Link to="/Bedroom12"> <LazyLoadImage  src={HandpaintedWardrobe} alt=""  loading='lazy'/></Link>  
                  </div>
                  <div className="turyaBedrooms-Wardrobe2-second-two">
                  <Link to="/Bedroom13">  <LazyLoadImage  src={OrientWardrobe} alt=""  loading='lazy'/></Link> 
                  </div>
              </div>
            </div>

            


            {/* Next Arrow Container */}


            <div className="turyaBedrooms-NextArrow-container">
               <Link to="/Drawers" className='turyaBedrooms-Next-Heading'> <h1 className='turyaBedrooms-Next-Heading'>{t('turya-next')}</h1></Link>
               <Link to="/Drawers"> <LazyLoadImage className='turyaBedrooms-Next-Arrow-img' src={NextArrow} alt="" loading='lazy' /></Link>
            </div>



        </div>
        </>
    )
}