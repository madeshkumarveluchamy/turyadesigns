import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Kitchen1.css'
import rangolikitchen1 from '../Images/rangolikitchen1.webp'
import rangolikitchen2 from '../Images/rangolikitchen2.webp'
import rangolikitchen3 from '../Images/rangolikitchen3.webp'
import rangolikitchen4 from '../Images/rangolikitchen4.webp'
import arrowright from '../Images/Arrowright.png'
import arrowleft from '../Images/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Kitchen1 = () => {
  const { t } = useTranslation('global');

  return (
    <div>
        <NavBar className="custom-navbars" />
        <div className="container-fluid detailed-turya-main-container">
            <div className="inner-container1">
            <Link className='mirror-top-head' to="/Kitchen"><h1 >{t('turya-kitchens')}</h1></Link>
            </div>
            <div className="second-inner-turya-detailed-container">
            <div className="row">
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='w-100 rangolikitchen1' src={rangolikitchen1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='rangolikitchen2' src={rangolikitchen2} alt="" loading='lazy' />
                  <div className="product-description">
                  <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-rangolikitchen')} </p>
                  <p className='product-description-para-1'>   <span className='description-heads'>{t('turya-description')}</span> {t('turya-rangolikitchen-para')}
                      </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-3 rangolikitchen3-col3">
                <LazyLoadImage className='rangolikitchen3' src={rangolikitchen3} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='rangolikitchen4' src={rangolikitchen4} alt="" loading='lazy' />
                </div>
            </div>
            </div>
            <div className="product-description-mobile">
            <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-rangolikitchen')}  </p>
                  <p className='product-description-para-1'>   <span className='description-heads'>{t('turya-description')}</span>  {t('turya-rangolikitchen-para')}
                      </p>
                  </div>
            {/* <div className="arrow-container">
           <Link to="/Bedroom4"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link> 
           <Link to="/Bedroom6"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link>
            </div> */}
        </div>
    </div>
  )
}

export default Kitchen1