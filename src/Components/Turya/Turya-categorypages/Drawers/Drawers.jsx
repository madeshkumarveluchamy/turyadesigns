import React, { useEffect } from 'react';
import "./Drawers.css"
import cherryblossom from '../Detailed-turya/Chestofdrawers/Drawerimages/cherryblossom1.webp'
import Dualitychest from '../Detailed-turya/Chestofdrawers/Drawerimages/Dualitydrawer1.webp'
import Earthchest from '../Detailed-turya/Chestofdrawers/Drawerimages/Earthdrawer1.webp'
import FallMonet from '../Detailed-turya/Chestofdrawers/Drawerimages/fallmonet1.jpg'
import GeometricPattern from '../Detailed-turya/Chestofdrawers/Drawerimages/geometricpattern1.jpg'
import mandalacabinet from '../Detailed-turya/Chestofdrawers/Drawerimages/mandalaunit1.webp'
import RedRose from '../Detailed-turya/Chestofdrawers/Drawerimages/redrose1.png'
import RusticCabinet from '../Detailed-turya/Chestofdrawers/Drawerimages/rusticdrawer1.webp'
import Scandinavian from '../Detailed-turya/Chestofdrawers/Drawerimages/scandinavian1.webp'
import Terrachest from '../Detailed-turya/Chestofdrawers/Drawerimages/Terra1.webp'
import Thevintage from '../Detailed-turya/Chestofdrawers/Drawerimages/vintage1.jpg'
import NextArrow from './Images/right-arrow.png'
import NavBar from '../../../Navbar/Navbar';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Drawers = () => {
     const { t } = useTranslation('global');
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <>
    <NavBar className="custom-navbars" />
    <div className='turyadesign-Drawers-container'>

        {/* First Row Container */}

        <div className="row turyaDrawers-Firstrow-container">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaDrawers-Firstcolumn">
                <div className="TuryaDrawers-Heading">
                    <h1>{t('turya-drawers')}</h1>
                </div>
                <div className="TuryaDrawers-first-one">
                   <Link to="/Drawer1">  <LazyLoadImage  src={cherryblossom} alt="" srcSet='' loading='lazy' /></Link>
                </div>
                <div className="TuryaDrawers-first-two">
                <Link to="/Drawer3">  <LazyLoadImage  src={Earthchest} alt="" srcSet='' loading='lazy'/></Link>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaDrawers-Secondcolumn">
                <div className="TuryaDrawers-second-one">
                <Link to="/Drawer2">  <LazyLoadImage  src={Dualitychest} alt="" srcSet='' loading='lazy'/></Link>
                </div>
                <div className="TuryaDrawers-second-two">
                <Link to="/Drawer4">   <LazyLoadImage  src={FallMonet} alt="" srcSet='' loading='lazy'/></Link>
                </div>
                <div className="TuryaDrawers-second-three">
                <Link to="/Drawer5">   <LazyLoadImage  src={GeometricPattern} alt="" srcSet='' loading='lazy'/></Link>
                </div>
            </div>
        </div>


        {/* Second Row Container */}


        <div className="row turyaDrawers-Secondrow-container">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaDrawers-Secondrow-First-container">
                <div className="TuryaDrawers-Firstone-inner-container">
                <Link to="/Drawer6">    <LazyLoadImage src={mandalacabinet} alt="" srcSet='' loading='lazy'/></Link>
                </div>
                <div className="TuryaDrawers-Firstone-inner-container">
                <Link to="/Drawer7"> <LazyLoadImage src={RedRose} alt="" srcSet='' loading='lazy'/></Link>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaDrawers-Secondrow-Second-container">
                <div className="TuryaDrawers-secondone-inner-container">
                <Link to="/Drawer8"> <LazyLoadImage src={RusticCabinet} alt="" srcSet='' loading='lazy'/></Link>
                </div>
                <div className="TuryaDrawers-secondone-inner-container">
                <Link to="/Drawer9"> <LazyLoadImage  src={Scandinavian} alt="" srcSet='' loading='lazy'/></Link>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaDrawers-Secondrow-Third-container">
                <div className="TuryaDrawers-Thirdone-inner-container">
                <Link to="/Drawer10">   <LazyLoadImage src={Terrachest} alt="" srcSet='' loading='lazy'/></Link>
                </div>
                <div className="TuryaDrawers-Thirdone-inner-container">
                <Link to="/Drawer11">   <LazyLoadImage src={Thevintage} alt="" srcSet='' loading='lazy'/></Link>
                </div>
            </div>
        </div>

        {/* Next Arrow Container */}


        <div className="TuryaDrawers-NextArrow-container">
            <Link to="/Accessories" className='TuryaDrawers-Next-Heading'> <h1 className='TuryaDrawers-Next-Heading'>{t('turya-next')}</h1></Link>
            <Link to="/Accessories">  <LazyLoadImage className='TuryaDrawers-Next-Arrow-img' src={NextArrow} alt="" srcSet='' loading='lazy'/></Link>
        </div>

        

    </div>
    </>
  )
}
