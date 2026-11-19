import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Accessories11.css'
import basichook1 from '../Images/basichook1.webp'
import basichook2 from '../Images/basichook2.webp'
import basichook3 from '../Images/basichook3.webp'
import basichook4 from '../Images/basichook4.webp'
import arrowright from '../Images/Arrowright.png'
import arrowleft from '../Images/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Accessories11 = () => {
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
                <LazyLoadImage className='basichook1' src={basichook1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='basichook2' src={basichook3} alt="" loading='lazy' />
                  <div className="product-description-book">
                      <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-basicdresswallhook')} </p>
                      <p className='product-description-para-1'><span className='description-heads'>{t('turya-description')}</span> {t('turya-basicdresswallhook-para')}
                      </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-2 basichook3-col3">
                <LazyLoadImage className='basichook3' src={basichook2} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-4 basichook-col4">
                <LazyLoadImage className='basichook4' src={basichook4} alt="" loading='lazy' />
                </div>
            </div>
            </div>
            <div className="product-description-mobile-2">
            <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-basicdresswallhook')} </p>
                      <p className='product-description-para-1'><span className='description-heads'>{t('turya-description')}</span> {t('turya-basicdresswallhook-para')}
                      </p>
                  </div>
        </div>
            <div className="arrow-container">
           <Link to="/Accessories10"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link> 
           <Link to="/Accessories12"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link>
            </div>
    </div>
  )
}

export default Accessories11