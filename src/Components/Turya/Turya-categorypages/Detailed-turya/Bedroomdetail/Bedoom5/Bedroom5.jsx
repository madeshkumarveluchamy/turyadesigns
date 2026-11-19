import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Bedroom5.css'
import modern1 from '../Images/modern1.webp'
import modern2 from '../Images/modern2.webp'
import modern3 from '../Images/modern3.webp'
import modern4 from '../Images/modern4.webp'
import arrowright from '../Images/Arrowright.png'
import arrowleft from '../Images/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Bedroom5 = () => {
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
                <LazyLoadImage className='w-100 modern1' src={modern1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='modern2' src={modern2} alt="" loading='lazy' />
                  <div className="product-description">
                  <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-modernwardrobe')} </p>
                  <p className='product-description-para-1'>   <span className='description-heads'>{t('turya-description')}</span> {t('turya-modernwardrobe-para')} 
                      </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-3 modern3-col3">
                <LazyLoadImage className='modern3' src={modern3} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='modern4' src={modern4} alt="" loading='lazy' />
                </div>
            </div>
            </div>
            <div className="product-description-mobile">
            <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span>{t('turya-modernwardrobe')} </p>
                  <p className='product-description-para-1'>   <span className='description-heads'>{t('turya-description')}</span> {t('turya-modernwardrobe-para')}
                      </p>
                  </div>
        </div>
            <div className="arrow-container">
           <Link to="/Bedroom4"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link> 
           <Link to="/Bedroom6"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link>
            </div>
    </div>
  )
}

export default Bedroom5