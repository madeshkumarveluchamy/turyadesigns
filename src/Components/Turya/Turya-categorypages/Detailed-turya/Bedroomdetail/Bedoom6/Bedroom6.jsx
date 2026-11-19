import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Bedroom6.css'
import aqua1 from '../Images/aqua1.webp'
import aqua2 from '../Images/aqua2.webp'
import aqua3 from '../Images/aqua3.webp'
import aqua4 from '../Images/aqua4.webp'
import arrowright from '../Images/Arrowright.png'
import arrowleft from '../Images/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Bedroom6 = () => {
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
                <LazyLoadImage className='w-100 aqua1' src={aqua1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='aqua2' src={aqua2} alt="" loading='lazy' />
                  <div className="product-description">
                  <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span>{t('turya-aquawardrope')}</p>
                  <p className='product-description-para-1'>   <span className='description-heads'>{t('turya-description')}</span>{t('turya-aquawardrope-para')}
                  </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-3 aqua3-col3">
                <LazyLoadImage className='aqua3' src={aqua3} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='aqua4' src={aqua4} alt="" loading='lazy' />
                </div>
            </div>
            </div>
            <div className="product-description-mobile">
                    <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-aquawardrope')} </p>
                    <p className='product-description-para-1'>   <span className='description-heads'>{t('turya-description')}</span>{t('turya-aquawardrope-para')}
                      </p>
                  </div>
        </div>
            <div className="arrow-container">
           <Link to="/Bedroom5"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link> 
           <Link to="/Bedroom7"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link>
            </div>
    </div>
  )
}

export default Bedroom6