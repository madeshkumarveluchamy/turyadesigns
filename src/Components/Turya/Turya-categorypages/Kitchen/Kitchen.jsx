import React, { useEffect } from 'react';
import "./Kitchen.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import NavBar from '../../../Navbar/Navbar';

import { Link } from 'react-router-dom';
// Kitchen IMAGES

import RangoliKitchen from './Kitchen_Images/Kitchen.webp'





// NEXT ARROW IMAGES

import NextArrow from './Kitchen_Images/right-arrow.png'
import { useTranslation } from 'react-i18next';

export const Kitchen = () => {
    const { t } = useTranslation('global');
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
         <NavBar className="custom-navbars" />
        <div className='turyadesign-Kitchen-container'>

            {/* First Row First Container - Kitchen SECTIONS */}

            <div className="row turyaKitchen-Kitchen-Firstrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaKitchen-Kitchen-Firstcolumn">
                    <div className="turyaKitchen-Heading">
                        <h1>{t('turya-kitchens')}</h1>
                    </div>
                    <div className="turyaKitchen-Kitchen-first-one">
                      <Link to="/Kitchen1"><LazyLoadImage src={RangoliKitchen} alt="" loading='lazy' /></Link>  
                    </div>
                </div>
            </div>

            
          

           

            


            {/* Next Arrow Container */}


            <div className="turyaKitchen-NextArrow-container">
             <Link to="/Mirrors" className='turyaKitchen-Next-Heading'>   <h1 className='turyaKitchen-Next-Heading'>NEXT</h1></Link>
             <Link to="/Mirrors">   <LazyLoadImage className='turyaKitchen-Next-Arrow-img' src={NextArrow} alt="" loading='lazy' /></Link>
            </div>



        </div>
        </>
    )
}