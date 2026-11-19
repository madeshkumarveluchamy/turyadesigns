import React, { useEffect } from 'react';
import "./Mirrors.css"
import Circle from '../Detailed-turya/Mirrorsdetail/DetailImages/Chikki mirror4.webp'
import MirrorFrame from '../Detailed-turya/Mirrorsdetail/DetailImages/Mirror Frame Spiral.webp'
import MirroRustics from '../Detailed-turya/Mirrorsdetail/DetailImages/rusticmirror3.webp'
import MoonMirrors from '../Detailed-turya/Mirrorsdetail/DetailImages/Sun Moon Mirrors.webp'
import MirrorSparrow from '../Detailed-turya/Mirrorsdetail/DetailImages/Mirrorsparrow.jpg'
import DualityMirror from '../Detailed-turya/Mirrorsdetail/DetailImages/Duality Mirror.webp'
import SquiggleMirror from '../Detailed-turya/Mirrorsdetail/DetailImages/Squiggles1.jpg'
import VicotrianMirror from '../Detailed-turya/Mirrorsdetail/DetailImages/victorianmirror.webp'
import MirrorBahunia from '../Detailed-turya/Mirrorsdetail/DetailImages/Bahunia2.jpg'
import MirrorPooja from '../Detailed-turya/Mirrorsdetail/DetailImages/Mirror Pooja.webp'
import MirrorGold from '../Detailed-turya/Mirrorsdetail/DetailImages/Goldfoil3.jpg'
import NextArrow from './Images/right-arrow.png'
import Cone from '../Detailed-turya/Mirrorsdetail/DetailImages/Cone1.jpg'
import Classic from '../Detailed-turya/Mirrorsdetail/DetailImages/Classicmirror1.webp'
import Maple from '../Detailed-turya/Mirrorsdetail/DetailImages/maplemirror3.webp'
import Mirror from '../Detailed-turya/Mirrorsdetail/DetailImages/speckgold1.webp'
import NavBar from '../../../Navbar/Navbar';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Mirrors = () => {
    const { t } = useTranslation('global');

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
        
  return (
    <>
         <NavBar className="custom-navbars" />
    <div className='turyadesignone-container'>
        {/* First Row Container */}

        <div className="row turyaMirror-Firstrow-container">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaMirror-Firstcolumn">
                <div className="TuryaMirror-Heading">
                    <h1>{t('turya-mirrors')}</h1>
                </div>
                <div className="TuryaMirrors-first-one">
                    <Link to="/Mirrordetail1"><LazyLoadImage className='mirror1-img' src={Circle} alt="" loading='lazy'/></Link>
                </div>
                <div className="TuryaMirrors-first-two">
                    <Link to="/Mirrordetail2"><LazyLoadImage src={MirrorFrame} alt="" loading='lazy' /></Link>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaMirror-Secondcolumn">
                <div className="TuryaMirrors-second-one">
                   <Link to="/Mirrordetail3"><LazyLoadImage src={MirroRustics} alt="" loading='lazy'/></Link> 
                </div>
                <div className="TuryaMirrors-second-two">
                    <Link to="/Mirrordetail4"><LazyLoadImage src={MoonMirrors} alt="" loading='lazy'/></Link>
                </div>
                <div className="TuryaMirrors-second-three">
                     <Link to="/Mirrordetail5"><LazyLoadImage src={MirrorSparrow} alt="" loading='lazy'/></Link>
                </div>
            </div>
        </div>


        {/* Second Row Container */}


        <div className="row turyaMirror-Secondrow-container">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 Secondrow-First-container">
                <div className="Firstone-inner-container">
                   <Link to="/Mirrordetail6"><LazyLoadImage src={DualityMirror} alt="" loading='lazy'/></Link> 
                </div>
                <div className="Firstone-inner-container">
                   <Link to="/Mirrordetail7"><LazyLoadImage src={SquiggleMirror} alt="" loading='lazy'/></Link> 
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 Secondrow-Second-container">
                <div className="secondone-inner-container">
                    <Link to="/Mirrordetail8"><LazyLoadImage className="victoriammirror-main-img" src={VicotrianMirror} alt="" loading='lazy'/></Link>
                </div>
                <div className="secondone-inner-container">
                    <Link to="/Mirrordetail9"><LazyLoadImage className="secondone-inner-container" src={MirrorBahunia} alt="" loading='lazy'/></Link>
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 Secondrow-Third-container">
                <div className="Thirdone-inner-container">
                    <Link to="/Mirrordetail10"><LazyLoadImage src={MirrorPooja} alt="" loading='lazy'/></Link>
                </div>
                <div className="Thirdone-inner-container">
                   <Link tp="/Mirrordetail11"> <LazyLoadImage src={MirrorGold} alt="" loading='lazy'/></Link>
                </div>
            </div>
        </div>

        {/* Third Row Container */}


        <div className="row thirdrow-mirror-container">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 thirdrow-innerfirst-conatiner">
                <div className="thirdrow-container-firstone">
                 <Link to="/Mirrordetail12"><LazyLoadImage className='thirdrow-innerImage-one' src={Cone} alt="" loading='lazy'/> </Link> 
                </div>
                <div className="thirdrow-container-secondone">
                <Link to="/Mirrordetail14"> <LazyLoadImage className='thirdrow-innerImage-one' src={Mirror} alt="" loading='lazy' /></Link> 
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 thirdrow-innersecond-conatiner">
            <div className="thirdrow-container-firstone">
            <Link to="/Mirrordetail13"> <LazyLoadImage className='thirdrow-innerImage-one' src={Classic} alt="" loading='lazy'/></Link> 
                </div>
                <div className="thirdrow-container-secondone">
                <Link to="/Mirrordetail15">  <LazyLoadImage className='thirdrow-innerImage-one' src={Maple} alt="" loading='lazy'/></Link>
                </div>
            </div>
        </div>

        {/* Next Arrow Container */}


        <div className="NextArrow-container-m">
        <div className="NextArrow-container">
        <Link to="/Seating" className='Next-Heading'> <h1 className='Next-Heading'>{t('turya-next')}</h1></Link>
        <Link to="/Seating"> <LazyLoadImage className='Next-Arrow-img' src={NextArrow} alt="" loading='lazy'/></Link> 
        </div>
        </div>

    </div>
    </>
  )
}