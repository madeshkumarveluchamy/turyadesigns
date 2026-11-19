import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Accessories5.css'
import peacocktray1 from '../Images/peacock1.webp'
import peacocktray2 from '../Images/peacock2.webp'
import peacocktray3 from '../Images/peacock3.webp'
import peacocktray4 from '../Images/peacock4.webp'
import arrowright from '../Images/Arrowright.png'
import arrowleft from '../Images/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Accessories5 = () => {
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
                <LazyLoadImage className='w-100 peacocktray1' src={peacocktray1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='peacocktray2' src={peacocktray4} alt="" loading='lazy' />
                  <div className="product-description">
                      <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-peacocktray')} </p> 
                      <p className='product-description-para-1'><span className='description-heads'>{t('turya-description')}</span> {t('turya-peacocktray-para')}
                      </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-2 peacocktray3-col3">
                <LazyLoadImage className='peacocktray3' src={peacocktray3} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-4">
                <LazyLoadImage className='w-100 peacocktray4' src={peacocktray2} alt="" loading='lazy' />
                </div>
            </div>
            </div>
            <div className="product-description-mobile">
            <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-peacocktray')} </p> 
                      <p className='product-description-para-1'><span className='description-heads'>{t('turya-description')}</span> {t('turya-peacocktray-para')}
                      </p>
                  </div>
        </div>
            <div className="arrow-container">
           <Link to="/Accessories4"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link> 
           <Link to="/Accessories6"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link>
            </div>
    </div>
  )
}

export default Accessories5