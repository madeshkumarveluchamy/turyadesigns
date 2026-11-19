import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Chair12.css'
import plaidsinlge1 from '../Images/plaidsinlge1.webp'
import plaidsinlge2 from '../Images/plaidsinlge2.webp'
import plaidsinlge3 from '../Images/plaidsinlge3.webp'
import plaidsinlge4 from '../Images/plaidsinlge4.webp'
import arrowright from '../Images/Arrowright.png'
import arrowleft from '../Images/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Chair12 = () => {
  const { t } = useTranslation('global');


  return (
    <div>
        <NavBar className="custom-navbars" />
            <div className="inner-container1">
            <Link className='mirror-top-head' to="/Seating"><h1 >{t('turya-seating')}</h1></Link>
            </div>
        <div className="container-fluid detailed-turya-main-container">
            <div className="second-inner-turya-detailed-container">
            <div className="row">
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='w-100 plaidsinlge1' src={plaidsinlge1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='plaidsinlge2' src={plaidsinlge3} alt="" loading='lazy' />
                  <div className="product-description">
                  <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-plaidchair')} </p>
                  <p className='product-description-para-1'>   <span className='description-heads'>{t('turya-description')}</span> {t('turya-plaidchair-para')}
                      </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-3 plaidsinlge3-col3">
                <LazyLoadImage className='plaidsinlge3' src={plaidsinlge2} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='plaidsinlge4' src={plaidsinlge4} alt="" loading='lazy' />
                </div>
            </div>
            </div>
            <div className="product-description-mobile">
            <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-plaidchair')}</p>
                  <p className='product-description-para-1'>   <span className='description-heads'>{t('turya-description')}</span> {t('turya-plaidchair-para')}
                      </p>
                  </div>
        </div>
            <div className="arrow-container">
           <Link to="/Chair11"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link> 
           <Link to="/Chair13"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link>
            </div>
    </div>
  )
}

export default Chair12