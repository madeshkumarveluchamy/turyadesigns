import React, { useEffect } from 'react';
import "./Doors.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import NavBar from '../../../Navbar/Navbar';
import { Link } from 'react-router-dom';
// DOORS IMAGES

import DreamDoor from './Doors_Images/DreamDoor.webp'
import WindDoor from './Doors_Images/WindDoor.webp'
import ArtDecoDoor from './Doors_Images/ArtDecoDoor.webp'
import BarnDoor from './Doors_Images/BarnDoor.webp'
import BellDoor from './Doors_Images/BellDoor.webp'
import CheckeredDoor from './Doors_Images/CheckeredDoor.webp'
import CircleLineDoor from './Doors_Images/CircleLineDoor.webp'
import ClassicPanelDoor from './Doors_Images/ClassicPanelDoor.webp'
import DendriteDoor from './Doors_Images/DendriteDoor.webp'
import ElemenalDoor from './Doors_Images/ElemenalDoor.webp'
import FibonacciDoor from './Doors_Images/FibonacciDoor.webp'
import FloraDoor from './Doors_Images/FloraDoor.webp'
import FloralDoor from './Doors_Images/FloralDoor.webp'
import GondhDoor from './Doors_Images/GondhDoor.webp'
import LeafDoor from './Doors_Images/LeafDoor.webp'
import LeafSplashDoor from './Doors_Images/LeafSplashDoor.webp'
import LinearDoor from './Doors_Images/LinearDoor.webp'
import LotusDoor from './Doors_Images/LotusDoor.webp'
import MoonDoor from './Doors_Images/MoonDoor.webp'
import MosaicDoor from './Doors_Images/MosaicDoor.webp'
import OrnateDoor from './Doors_Images/OrnateDoor.webp'
import OrnateGate from './Doors_Images/OrnateGate.webp'
import PanelledDoor from './Doors_Images/PanelledDoor.webp'
import PatchworkDoor from './Doors_Images/PatchworkDoor.webp'
import PeekabooDoor from './Doors_Images/PeekabooDoor.webp'
import PupperGate from './Doors_Images/PupperGate.webp'
import SaxDoor from './Doors_Images/SaxDoor.webp'
import SwirlDoor from './Doors_Images/SwirlDoor.webp'
import TealDoor from './Doors_Images/TealDoor.webp'
import TexturedDoor from './Doors_Images/TexturedDoor.webp'
import TrackDoor from './Doors_Images/TrackDoor.webp'
import TreeOfLifeDoor from './Doors_Images/TreeOfLifeDoor.webp'
import TribalDoor from './Doors_Images/TribalDoor.webp'




// NEXT ARROW IMAGES

import NextArrow from './Doors_Images/right-arrow.png'
import { useTranslation } from 'react-i18next';


export const Doors = () => {
    const { t } = useTranslation('global');
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
         <NavBar className="custom-navbars" />
        <div className='turyadesign-Doors-container'>

            {/* First Row First Container - DOORS SECTIONS */}

            <div className="row turyaDoors-Doors1-Firstrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaDoors-Doors1-Firstcolumn">
                    <div className="turyaDoors-Heading">
                        <h1>{t('turya-doors')}</h1>
                    </div>
                    <div className="turyaDoors-Doors1-first-one">
                     <Link to="/Doors1"><LazyLoadImage src={DreamDoor} alt="" loading='lazy' /> </Link>   
                    </div>
                    <div className="turyaDoors-Doors1-first-two">
                    <Link to="/Doors2"> <LazyLoadImage src={WindDoor} alt="" loading='lazy' /> </Link> 
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaDoors-Doors1-Secondcolumn">
                    <div className="turyaDoors-Doors1-second-one">
                    <Link to="/Doors3"> <LazyLoadImage src={ArtDecoDoor} alt="" loading='lazy' /></Link>  
                    </div>
                    <div className="turyaDoors-Doors1-second-two">
                    <Link to="/Doors4"> <LazyLoadImage src={BarnDoor} alt="" loading='lazy' /></Link>  
                    </div>
                    <div className="turyaDoors-Doors1-second-three">
                    <Link to="/Doors5"> <LazyLoadImage src={BellDoor} alt="" loading='lazy' /></Link>  
                    </div>
                </div>
            </div>

            {/* First Row Second Container - Doors SECTIONS */}

            <div className="row turyaDoors-Doors2-Firstrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaDoors-Doors2-Firstcolumn">
                    
                    <div className="turyaDoors-Doors2-first-one">
                    <Link to="/Doors6">  <LazyLoadImage src={CheckeredDoor} alt="" loading='lazy' /></Link>  
                    </div>
                    <div className="turyaDoors-Doors2-first-two">
                    <Link to="/Doors7"> <LazyLoadImage src={CircleLineDoor} alt="" loading='lazy' /></Link>   
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaDoors-Doors2-Secondcolumn">
                    <div className="turyaDoors-Doors2-second-one">
                    <Link to="/Doors8"> <LazyLoadImage src={ClassicPanelDoor} alt="" loading='lazy' /> </Link>   
                    </div>
                    <div className="turyaDoors-Doors2-second-two">
                    <Link to="/Doors9">  <LazyLoadImage src={DendriteDoor} alt="" loading='lazy' /></Link>  
                    </div>
                </div>
            </div>


            {/* First Row Third Container - Doors SECTIONS */}

            <div className="row turyaDoors-Doors3-Firstrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaDoors-Doors3-Firstcolumn">
                    
                    <div className="turyaDoors-Doors3-first-one">
                    <Link to="/Doors10">  <LazyLoadImage src={ElemenalDoor} alt="" loading='lazy' /></Link>  
                    </div>
                    <div className="turyaDoors-Doors3-first-two">
                    <Link to="/Doors11">  <LazyLoadImage src={FibonacciDoor} alt="" loading='lazy' /></Link>  
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaDoors-Doors3-Secondcolumn">
                    <div className="turyaDoors-Doors3-second-one">
                    <Link to="/Doors12">  <LazyLoadImage src={FloraDoor} alt="" loading='lazy' /> </Link>  
                    </div>
                    <div className="turyaDoors-Doors3-second-two">
                    <Link to="/Doors13">  <LazyLoadImage src={FloralDoor} alt="" loading='lazy' /></Link>  
                    </div>
                    <div className="turyaDoors-Doors3-second-three">
                    <Link to="/Doors14">  <LazyLoadImage src={GondhDoor} alt="" loading='lazy' /></Link>  
                    </div>
                </div>
            </div>



            {/* First Row Fourth Container - DOORS SECTIONS */}

            <div className="row turyaDoors-Doors4-Firstrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaDoors-Doors4-Firstcolumn">
                    
                    <div className="turyaDoors-Doors4-first-one">
                    <Link to="/Doors15">  <LazyLoadImage src={LeafDoor} alt="" loading='lazy' /></Link>  
                    </div>
                    <div className="turyaDoors-Doors4-first-two">
                    <Link to="/Doors16">  <LazyLoadImage src={LeafSplashDoor} alt="" loading='lazy' /></Link>  
                    </div>
                    <div className="turyaDoors-Doors4-first-three">
                    <Link to="/Doors17">   <LazyLoadImage src={LinearDoor} alt="" loading='lazy' /></Link> 
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaDoors-Doors4-Secondcolumn">
                    <div className="turyaDoors-Doors4-second-one">
                    <Link to="/Doors18">  <LazyLoadImage src={LotusDoor} alt="" loading='lazy' /></Link>  
                    </div>
                    <div className="turyaDoors-Doors4-second-two">
                    <Link to="/Doors19">  <LazyLoadImage src={MoonDoor} alt="" loading='lazy' /></Link>  
                    </div>
                    <div className="turyaDoors-Doors4-second-three">
                    <Link to="/Doors20">   <LazyLoadImage src={MosaicDoor} alt="" loading='lazy' /> </Link> 
                    </div>
                </div>
            </div>


            {/* First Row Fifth Container - DOORS SECTIONS */}

            <div className="row turyaDoors-Doors5-Firstrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaDoors-Doors5-Firstcolumn">
                    
                    <div className="turyaDoors-Doors5-first-one">
                    <Link to="/Doors21">  <LazyLoadImage src={OrnateDoor} alt="" loading='lazy' /></Link>  
                    </div>
                    <div className="turyaDoors-Doors5-first-two">
                    <Link to="/Doors22">  <LazyLoadImage src={OrnateGate} alt="" loading='lazy' /></Link>   
                    </div>
                    <div className="turyaDoors-Doors5-first-three">
                    <Link to="/Doors23">  <LazyLoadImage src={PanelledDoor} alt="" loading='lazy' /></Link>  
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaDoors-Doors5-Secondcolumn">
                    <div className="turyaDoors-Doors5-second-one">
                    <Link to="/Doors24">  <LazyLoadImage src={PatchworkDoor} alt="" loading='lazy' /></Link> 
                    </div>
                    <div className="turyaDoors-Doors5-second-two">
                    <Link to="/Doors25"> <LazyLoadImage src={PeekabooDoor} alt="" loading='lazy' /></Link>  
                    </div>
                    <div className="turyaDoors-Doors5-second-three">
                    <Link to="/Doors26">  <LazyLoadImage src={PupperGate} alt="" loading='lazy' /></Link>  
                    </div>
                </div>
            </div>


            {/* First Row Sixth Container - DOORS SECTIONS */}

            <div className="row turyaDoors-Doors6-Firstrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaDoors-Doors6-Firstcolumn">
                    
                    <div className="turyaDoors-Doors6-first-one">
                    <Link to="/Doors27">  <LazyLoadImage src={SaxDoor} alt="" loading='lazy' /></Link>  
                    </div>
                    <div className="turyaDoors-Doors6-first-two">
                    <Link to="/Doors28">  <LazyLoadImage src={SwirlDoor} alt="" loading='lazy' /> </Link>  
                    </div>
                    <div className="turyaDoors-Doors6-first-three">
                    <Link to="/Doors29">  <LazyLoadImage src={TealDoor} alt="" loading='lazy' /></Link>  
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaDoors-Doors6-Secondcolumn">
                    <div className="turyaDoors-Doors6-second-one">
                    <Link to="/Doors30">  <LazyLoadImage src={TexturedDoor} alt="" loading='lazy' /></Link>  
                    </div>
                    <div className="turyaDoors-Doors6-second-two">
                    <Link to="/Doors31">   <LazyLoadImage src={TrackDoor} alt="" loading='lazy' /></Link> 
                    </div>
                    <div className="turyaDoors-Doors6-second-three">
                    <Link to="/Doors32">  <LazyLoadImage src={TreeOfLifeDoor} alt="" loading='lazy' /></Link>  
                    </div>
                </div>
            </div>


            {/* Last DOOR Row  */}


            <div className="row turyaDoors-Doors6-Firstrow-container">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaDoors-Doors6-Firstcolumn">
                    
                    <div className="turyaDoors-Doors6-first-Four">
                     <Link to="/Doors33"><LazyLoadImage src={TribalDoor} alt="" loading='lazy' /></Link>   
                    </div>
                </div>
            </div>

           

          

           

            


            {/* Next Arrow Container */}


            <div className="turyaDoors-NextArrow-container">
              <Link to="/Kitchen" className='turyaDoors-Next-Heading'> <h1 className='turyaDoors-Next-Heading'>{t('turya-next')}</h1></Link> 
              <Link to="/Kitchen"> <LazyLoadImage className='turyaDoors-Next-Arrow-img' src={NextArrow} alt="" loading='lazy' /></Link> 
            </div>



        </div>
        </>
    )
}