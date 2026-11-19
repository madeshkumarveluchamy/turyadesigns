import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Accessories32.css'
import Crow1 from '../Images/Crow1.webp'
import Crow2 from '../Images/Crow2.webp'
import Crow3 from '../Images/Crow3.webp'
import Crow4 from '../Images/Crow4.webp'
import arrowright from '../Images/Arrowright.png'
import arrowleft from '../Images/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Accessories32 = () => {
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
                <LazyLoadImage className='Crow1' src={Crow1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='Crow2' src={Crow2} alt="" loading='lazy' />
                  <div className="product-description-crow">
                      <p className='product-description-para-1'> <span className='description-heads'>{t('turya-name')}</span> {t('turya-thecrow')} </p>
                      <p className='product-description-para-1'> <span className='description-heads'>{t('turya-description')}</span> {t('turya-thecrow-para')}</p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-2 Crow3-col3">
                <LazyLoadImage className='Crow3' src={Crow3} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-4">
                <LazyLoadImage className='Crow4' src={Crow4} alt="" loading='lazy' />
                </div>
            </div>
            </div>
            <div className="product-description-mobile">
            <p className='product-description-para-1'> <span className='description-heads'>{t('turya-name')}</span> {t('turya-thecrow')} </p>
            <p className='product-description-para-1'> <span className='description-heads'>{t('turya-description')}</span> {t('turya-thecrow-para')}</p>
                  </div>
        </div>
            <div className="arrow-container">
           <Link to="/Accessories31"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link> 
           <Link to="/Accessories33"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link>
            </div>
    </div>
  )
}

export default Accessories32