import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Teapoy4.css'
import classicteapoy1 from '../Images/classicteapoy1.jpg'
import classicteapoy2 from '../Images/classicteapoy2.jpg'
import classicteapoy3 from '../Images/classicteapoy3.png'
import classicteapoy4 from '../Images/classicteapoy4.png'
import arrowright from '../Images/Arrowright.png'
import arrowleft from '../Images/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Teapoy4 = () => {
  const { t } = useTranslation('global');
 
  return (
    <div>
        <NavBar className="custom-navbars" />
            <div className="inner-container1">
            <Link className='mirror-top-head' to="/Tables"><h1>{t('turya-tables')}</h1></Link>
            </div>
            <div className="container-fluid detailed-turya-main-container">
            <div className="second-inner-turya-detailed-container">
            
            <div className="row">
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='w-100 classicteapoy1' src={classicteapoy1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='classicteapoy2' src={classicteapoy4} alt="" loading='lazy' />
                  <div className="product-description">
                  <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span>{t('turya-classicteapoy')} </p>
                  <p className='product-description-para-1'>   <span className='description-heads'>{t('turya-description')}</span> {t('turya-classicteapoy-para')}
                      </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-3 classicteapoy3-col3">
                <LazyLoadImage className='classicteapoy3' src={classicteapoy3} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='classicteapoy4' src={classicteapoy2} alt="" loading='lazy' />
                </div>
            </div>
            </div>
            <div className="product-description-mobile">
            <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span>{t('turya-classicteapoy')} </p>
                  <p className='product-description-para-1'>   <span className='description-heads'>{t('turya-description')}</span> {t('turya-classicteapoy-para')}
                      </p>
                  </div>
        </div>
            <div className="arrow-container">
           <Link to="/Table30"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link> 
           <Link to="/Table32"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link>
            </div>
    </div>
  )
}

export default Teapoy4