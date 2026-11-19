import React, { useEffect } from 'react';
import "./Accessorries.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

// TRAY IMAGES

import SplashTray from './Accessories_Images/Trays/Splash Tray.webp'
import Handpainted from './Accessories_Images/Trays/Handpainted Tray.webp'
import FallLeaves from './Accessories_Images/Trays/Fall Leaves Tray.webp'
import InlayTray from './Accessories_Images/Trays/Inlay Tray.webp'
import PeacockTray from './Accessories_Images/Trays/Peacock Tray.webp'
import CheeseBoard from './Accessories_Images/Trays/The Cheese Board Tray.webp'
import Theclassic from './Accessories_Images/Trays/The classic .webp'
import ContemporaryTray from './Accessories_Images/Trays/The Contemporary Tray.webp'
import CutieTray from './Accessories_Images/Trays/The Cutie Tray.webp'
import TRITray from './Accessories_Images/Trays/TRI Tray.webp'

// HOOKS IMAGES

import BasicDressWallHook from './Accessories_Images/Hooks/Basic Dress Wall Hook.webp'
import CutoutEdgeHook from './Accessories_Images/Hooks/Cutout Edge Hook.webp'
import DendriteHook from './Accessories_Images/Hooks/Dendrite Hook.webp'
import MetalRobeHook from './Accessories_Images/Hooks/Metal Robe Hook.webp'
import HookLedge from './Accessories_Images/Hooks/Hook Ledge.webp'
import MotifLedge from './Accessories_Images/Hooks/Motif Ledge.webp'
import OrnateLedge from './Accessories_Images/Hooks/Ornate Ledge.webp'
import ScrewRobeHook from './Accessories_Images/Hooks/Screw Robe Hook.webp'
import SlantedHook from './Accessories_Images/Hooks/Slanted Hook.webp'
import ClassicLedge from './Accessories_Images/Hooks/The Classic Ledge.webp'
import TheOLedge from './Accessories_Images/Hooks/The O Ledge.webp'
import PlumeriaHook from './Accessories_Images/Hooks/Plumeria Hook.webp'

// HOOKS IMAGES

import NatureCopperCoasters from './Accessories_Images/Nature Copper Coasters.webp'
import FlowerVase from './Accessories_Images/Flower Vase.webp'
import KeyHolder from './Accessories_Images/Key Holder.webp'
import MagazineStand from './Accessories_Images/Magazine Stand.webp'
import PencilHolder from './Accessories_Images/Pencil Holder.webp'
import PlanterStand from './Accessories_Images/Planter Stand.webp'
import Ringbowl from './Accessories_Images/Ring bowl.webp'
import Swirlsbowl from './Accessories_Images/Swirls bowl.webp'
import TheBookWorms from './Accessories_Images/The BookWorms.webp'
import TheCrow from './Accessories_Images/The Crow.webp'
import TraibleBowel from './Accessories_Images/The Traible Bowel.webp'
import NavBar from '../../../Navbar/Navbar';
// NEXT ARROW IMAGES

import NextArrow from './Accessories_Images/right-arrow.png'
import { useTranslation } from 'react-i18next';

export const Accessories = () => {
     const { t } = useTranslation('global');
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <>
    <NavBar className="custom-navbars" />
    <div className='turyadesign-Accessories-container'>

        {/* First Row Container - TRAYS SECTIONS */}

        <div className="row turyaAccessories-Tray-Firstrow-container">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaAccessories-Tray-Firstcolumn">
                <div className="TuryaAccessories-Heading">
                    <h1>{t('turya-accessories')}</h1>
                </div>
                <div className="TuryaAccessories-Tray-first-one">
                  <Link to="/Accessories1"> <LazyLoadImage  src={SplashTray} alt="" loading='lazy'/> </Link>  
                </div>
                <div className="TuryaAccessories-Tray-first-two">
                <Link to="/Accessories3">  <LazyLoadImage  src={Handpainted} alt="" loading='lazy'/> </Link>  
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaAccessories-Tray-Secondcolumn">
                <div className="TuryaAccessories-Tray-second-one">
                <Link to="/Accessories2"> <LazyLoadImage  src={FallLeaves} alt="" loading='lazy' /> </Link>   
                </div>
                <div className="TuryaAccessories-Tray-second-two">
                <Link to="/Accessories4">   <LazyLoadImage  src={InlayTray} alt="" loading='lazy' /> </Link>  
                </div>
                <div className="TuryaAccessories-Tray-second-three">
                <Link to="/Accessories5"> <LazyLoadImage  src={PeacockTray} alt="" loading='lazy' />  </Link>     
                </div>
            </div>
        </div>

        <div className="row turyaAccessories-Tray-Secondrow-container">
            
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaAccessories-Tray-Secondcolumn">
                <div className="TuryaAccessories-Tray-second-one">
                <Link to="/Accessories6"> <LazyLoadImage  src={CheeseBoard} alt="" loading='lazy'/> </Link>    
                </div>
                <div className="TuryaAccessories-Tray-second-two">
                <Link to="/Accessories7">  <LazyLoadImage  src={Theclassic} alt="" loading='lazy'/> </Link>   
                </div>
                
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaAccessories-Tray-Firstcolumn">
                <div className="TuryaAccessories-Tray-first-oneplus">
                <Link to="/Accessories8">  <LazyLoadImage  src={ContemporaryTray} alt="" loading='lazy'/> </Link>   
                </div>
                <div className="TuryaAccessories-Tray-first-two">
                <Link to="/Accessories9">  <LazyLoadImage  src={CutieTray} alt="" loading='lazy'/> </Link>   
                </div>
                <div className="TuryaAccessories-Tray-first-three">
                <Link to="/Accessories10">   <LazyLoadImage  src={TRITray} alt="" loading='lazy'/> </Link>  
                </div>
                
            </div>
        </div>


        {/* Second Row Container - TRAYS SECTIONS  */}


        <div className="row turyaAccessories-Secondrow-container">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaAccessories-Secondrow-Firstone-container">
                <div className="TuryaAccessories-Firstone-inner-container">
                <Link to="/Accessories11">  <LazyLoadImage src={BasicDressWallHook} alt=""  loading='lazy'/> </Link>   
                </div>
                <div className="TuryaAccessories-Firstone-inner-container">
                <Link to="/Accessories12">  <LazyLoadImage src={CutoutEdgeHook} alt=""  loading='lazy'/> </Link>   
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaAccessories-Secondrow-Second-container">
                <div className="TuryaAccessories-secondone-inner-container">
                <Link to="/Accessories13">  <LazyLoadImage src={DendriteHook} alt="" loading='lazy' /> </Link>   
                </div>
                <div className="TuryaAccessories-secondone-inner-container">
                <Link to="/Accessories14">  <LazyLoadImage  src={MetalRobeHook} alt="" loading='lazy' /> </Link>  
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaAccessories-Secondrow-Third-container">
                <div className="TuryaAccessories-Thirdone-inner-container">
                <Link to="/Accessories15">  <LazyLoadImage src={HookLedge} alt="" loading='lazy' /> </Link>   
                </div>
                <div className="TuryaAccessories-Thirdone-inner-container">
                <Link to="/Accessories16">  <LazyLoadImage src={MotifLedge} alt=""  loading='lazy'/> </Link>  
                </div>
            </div>
        </div>

        <div className="row turyaAccessories-Secondrow-container">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaAccessories-Secondrow-Firsttwo-container">
                <div className="TuryaAccessories-Firstone-inner-container">
                <Link to="/Accessories17">  <LazyLoadImage src={OrnateLedge} alt="" loading='lazy' /> </Link>   
                </div>
                <div className="TuryaAccessories-Firstone-inner-container">
                <Link to="/Accessories18">   <LazyLoadImage src={ScrewRobeHook} alt="" loading='lazy' /> </Link>  
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaAccessories-Secondrow-Second-container">
                <div className="TuryaAccessories-secondone-inner-container">
                <Link to="/Accessories19">   <LazyLoadImage src={SlantedHook} alt=""  loading='lazy'/> </Link>  
                </div>
                <div className="TuryaAccessories-secondone-inner-container">
                <Link to="/Accessories20">   <LazyLoadImage  src={ClassicLedge} alt=""  loading='lazy'/> </Link>  
                </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 TuryaAccessories-Secondrow-Third-container">
                <div className="TuryaAccessories-Thirdone-inner-container">
                <Link to="/Accessories21">  <LazyLoadImage src={TheOLedge} alt="" loading='lazy' /> </Link>  
                </div>
                <div className="TuryaAccessories-Thirdone-inner-container">
                <Link to="/Accessories22">   <LazyLoadImage src={PlumeriaHook  } alt="" loading='lazy' /> </Link>  
                </div>
            </div>
        </div>


        {/* Third Row Container - Accessories SECTIONS */}

        <div className="row turyaAccessories-Thirdrow-container">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaAccessories-ThirdRow-Firstcolumn">
                
                <div className="TuryaAccessories-Thirdrow-first-one">
                <Link to="/Accessories23">   <LazyLoadImage  src={NatureCopperCoasters} alt="" loading='lazy'/> </Link>  
                </div>
                <div className="TuryaAccessories-Thirdrow-first-two">
                <Link to="/Accessories24">  <LazyLoadImage  src={FlowerVase} alt="" loading='lazy'/> </Link>   
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaAccessories-Thirdrow-Secondcolumn">
                <div className="TuryaAccessories-Thirdrow-second-one">
                <Link to="/Accessories25">   <LazyLoadImage  src={KeyHolder} alt="" loading='lazy' /> </Link>  
                </div>
                <div className="TuryaAccessories-Thirdrow-second-two">
                <Link to="/Accessories26"> <LazyLoadImage  src={MagazineStand} alt="" loading='lazy' /> </Link>   
                </div>
                <div className="TuryaAccessories-Thirdrow-second-three">
                <Link to="/Accessories27">  <LazyLoadImage  src={PencilHolder} alt="" loading='lazy' /> </Link>   
                </div>
            </div>
        </div>

        <div className="row turyaAccessories-Thirdrows-container">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaAccessories-ThirdRows-Firstcolumn">
                
                <div className="TuryaAccessories-Thirdrows-first-one">
                <Link to="/Accessories28"> <LazyLoadImage  src={PlanterStand} alt="" loading='lazy'/> </Link>   
                </div>
                <div className="TuryaAccessories-Thirdrows-first-two">
                <Link to="/Accessories29">    <LazyLoadImage  src={Ringbowl} alt="" loading='lazy'/> </Link> 
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 turyaAccessories-Thirdrows-Secondcolumn">
                <div className="TuryaAccessories-Thirdrows-second-one">
                <Link to="/Accessories30">   <LazyLoadImage  src={Swirlsbowl} alt="" loading='lazy' /> </Link>  
                </div>
                <div className="TuryaAccessories-Thirdrows-second-two">
                <Link to="/Accessories31"> <LazyLoadImage  src={TheBookWorms} alt="" loading='lazy' /> </Link>   
                </div>
                <div className="TuryaAccessories-Thirdrows-second-three">
                <Link to="/Accessories32">  <LazyLoadImage  src={TheCrow} alt="" loading='lazy' /> </Link>   
                </div>
                <div className="TuryaAccessories-Thirdrows-second-three">
                <Link to="/Accessories33">    <LazyLoadImage  src={TraibleBowel} alt="" loading='lazy' /> </Link>  
                </div>
            </div>
        </div>






        {/* Next Arrow Container */}


        <div className="TuryaAccessories-NextArrow-container">
        <Link to="/Doors" className='TuryaAccessories-Next-Heading'> <h1 className='TuryaAccessories-Next-Heading'>{t('turya-next')}</h1></Link>
            <Link to="/Doors"> </Link>  <LazyLoadImage className='TuryaAccessories-Next-Arrow-img' src={NextArrow} alt="" />
        </div>

        

    </div>
    </>
  )
}
