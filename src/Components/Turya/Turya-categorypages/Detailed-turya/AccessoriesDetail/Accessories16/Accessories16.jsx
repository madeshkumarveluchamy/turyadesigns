import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Accessories16.css'
import motifledge1 from '../Images/motifledge1.webp'
import motifledge2 from '../Images/motifledge2.webp'
import motifledge3 from '../Images/motifledge3.webp'
import motifledge4 from '../Images/motifledge4.webp'
import arrowright from '../Images/Arrowright.png'
import arrowleft from '../Images/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Accessories16 = () => {
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
                <LazyLoadImage className='motifledge1' src={motifledge1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='motifledge2' src={motifledge2} alt="" loading='lazy' />
                  <div className="product-description-motif">
                      <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-motifledge')}</p>
                      <p className='product-description-para-1'><span className='description-heads'>{t('turya-description')}</span>{t('turya-motifledge-para')}
                      </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-2 motifledge3-col3">
                <LazyLoadImage className='motifledge3' src={motifledge3} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-4">
                <LazyLoadImage className='motifledge4' src={motifledge4} alt="" loading='lazy' />
                </div>
            </div>
            </div>
            <div className="product-description-mobile">
            <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-motifledge')}</p>
                      <p className='product-description-para-1'><span className='description-heads'>{t('turya-description')}</span> {t('turya-motifledge-para')}
                      </p>
                  </div>
        </div>
            <div className="arrow-container">
           <Link to="/Accessories15"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link> 
           <Link to="/Accessories17"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link>
            </div>
    </div>
  )
}

export default Accessories16