import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Bedroom4.css'
import tiledcot1 from '../Images/tiledcot1.webp'
import tiledcot2 from '../Images/tiledcot2.webp'
import tiledcot3 from '../Images/tiledcot3.webp'
import tiledcot4 from '../Images/tiledcot4.webp'
import arrowright from '../Images/Arrowright.png'
import arrowleft from '../Images/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Bedroom4 = () => {
   const { t } = useTranslation('global');
  return (
    <div>
        <NavBar className="custom-navbars" />
            <div className="inner-container1">
            <Link className='mirror-top-head' to="/Bedrooms"><h1 >{t('turya-bedroom')}</h1></Link>
            </div>
            <div className="container-fluid detailed-turya-main-container">
            <div className="second-inner-turya-detailed-container">
            
            <div className="row">
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='w-100 tiledcot1' src={tiledcot1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='tiledcot2' src={tiledcot2} alt="" loading='lazy' />
                  <div className="product-description">
                      <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-tiledcot')} </p>
                      <p className='product-description-para-1'> <span className='description-heads'>{t('turya-description')}</span> {t('turya-tiledcot-para')}
                      </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-3 tiledcot3-col3">
                <LazyLoadImage className='tiledcot3' src={tiledcot3} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='tiledcot4' src={tiledcot4} alt="" loading='lazy' />
                </div>
            </div>
            </div>
            <div className="product-description-mobile">
                      <p className='product-description-para'><span className='description-heads'>{t('turya-name')}</span>{t('turya-tiledcot')} <br/>
                       <span className='description-heads'>{t('turya-description')}</span> {t('turya-tiledcot-para')}
                      </p>
                  </div>
        </div>
            <div className="arrow-container">
           <Link to="/Bedroom3"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link> 
           <Link to="/Bedroom5"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link>
            </div>
    </div>
  )
}

export default Bedroom4