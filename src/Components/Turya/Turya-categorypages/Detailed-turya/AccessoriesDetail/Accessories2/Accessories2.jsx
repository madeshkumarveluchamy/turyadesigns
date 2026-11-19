import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Accessories2.css'
import fallleavestray1 from '../Images/fallleavestray1.webp'
import fallleavestray2 from '../Images/fallleavestray2.webp'
import fallleavestray3 from '../Images/fallleavestray3.webp'
import fallleavestray4 from '../Images/fallleavestray4.webp'
import arrowright from '../Images/Arrowright.png'
import arrowleft from '../Images/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Accessories2 = () => {
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
                <LazyLoadImage className='w-100 fallleavestray1' src={fallleavestray1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='fallleavestray2' src={fallleavestray4} alt="" loading='lazy' />
                  <div className="product-description-fallleave">
                      <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-fallleavestray')}</p>
                      <p className='product-description-para-1'> <span className='description-heads'>{t('turya-description')}</span> {t('turya-fallleavestray-para')}
                      </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-2 fallleavestray3-col3">
                <LazyLoadImage className='fallleavestray3' src={fallleavestray3} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-4">
                <LazyLoadImage className='w-100 fallleavestray4' src={fallleavestray2} alt="" loading='lazy' />
                </div>
            </div>
            </div>
            <div className="product-description-mobile">
                      <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-fallleavestray')} </p>
                      <p className='product-description-para-1'> <span className='description-heads'>{t('turya-description')}</span> {t('turya-fallleavestray-para')}
                      </p>
                  </div>
        </div>
            <div className="arrow-container">
           <Link to="/Accessories1"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link> 
           <Link to="/Accessories3"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link>
            </div>
    </div>
  )
}

export default Accessories2