import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Drawer4.css'
import fallmonet1 from '../Drawerimages/fallmonet1.jpg'
import arrowright from '../Drawerimages/Arrowright.png'
import arrowleft from '../Drawerimages/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Drawer4 = () => {
  const { t } = useTranslation('global');
  return (
    <div>
        <NavBar className="custom-navbars" />
            <div className="inner-container1">
            <Link className='drawer-top-head' to="/Drawers"><h1>{t('turya-drawers')}</h1></Link> 
            </div>
            <div className="container-fluid detailed-turya-main-container">
            <div className="second-inner-turya-detailed-container">
            
            <div className="row">
               
                <div className="col-11 col-sm-11 col-md-6 guncol1 order-2 order-md-1">
                {/* <LazyLoadImage className='chikkimirror2' src={chikkimirror2} alt="" loading='lazy' /> */}
                  <div className="product-description-signle-container">
                      <p className='product-description-para-3'><span className='description-heads'>{t('turya-name')}</span> {t('turya-fallmonetdrawer')} </p>
                      <p className='product-description-para-3'> <span className='description-heads'>{t('turya-description')}</span>{t('turya-fallmonetdrawer-para')}

                      </p>
                  </div>
                </div>
               
                <div className="col-12 col-sm-12 col-md-6 guncol2 order-1 order-md-2">
                <LazyLoadImage className='fallmonet1' src={fallmonet1} alt="" loading='lazy' />
                </div>
            </div>
            </div>
        </div>
            <div className="arrow-container">
           <Link to="/Drawer3"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /></Link> 
            <Link to="/Drawer5"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /></Link>
            </div>
    </div>
  )
}

export default Drawer4