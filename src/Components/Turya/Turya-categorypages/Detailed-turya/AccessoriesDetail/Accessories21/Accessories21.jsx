import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Accessories21.css'
import Oledge1 from '../Images/O ledge1.webp'
import Oledge2 from '../Images/O ledge2.webp'
import Oledge3 from '../Images/O ledge3.webp'
import Oledge4 from '../Images/O ledge4.webp'
import arrowright from '../Images/Arrowright.png'
import arrowleft from '../Images/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Accessories21 = () => {
   const { t } = useTranslation('global');
  return (
    <div>
        <NavBar className="custom-navbars" />
            <div className="inner-container1">
            <Link className='top-head-accessories' to="/Accessories"><h1>{t('turya-accessories')}</h1></Link>   
            </div>
            <div className="container-fluid detailed-turya-main-container">
            <div className="second-inner-turya-detailed-container">
            
            <div className="row">
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='Oledge1' src={Oledge1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='Oledge2' src={Oledge2} alt="" loading='lazy' />
                  <div className="product-description">
                      <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-oledge')} </p>
                      <p className='product-description-para-1'> <span className='description-heads'>{t('turya-description')}</span>{t('turya-oledge-para')}
                      </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-2 Oledge3-col3">
                <LazyLoadImage className='Oledge3' src={Oledge3} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-4">
                <LazyLoadImage className='Oledge4' src={Oledge4} alt="" loading='lazy' />
                </div>
            </div>
            </div>
            <div className="product-description-mobile">
            <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-oledge')} </p>
                      <p className='product-description-para-1'> <span className='description-heads'>{t('turya-description')}</span>{t('turya-oledge-para')}
                      </p>
                  </div>
        </div>
            <div className="arrow-container">
           <Link to="/Accessories20"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link> 
           <Link to="/Accessories22"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link>
            </div>
    </div>
  )
}

export default Accessories21