import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Mirrordetail15.css'
import maplemirror1 from '../DetailImages/maplemirror1.webp'
import maplemirror2 from '../DetailImages/maplemirror2.webp'
import maplemirror3 from '../DetailImages/maplemirror3.webp'
import maplemirror4 from '../DetailImages/maplemirror4.webp'
import arrowright from '../DetailImages/Arrowright.png'
import arrowleft from '../DetailImages/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Mirrordetail15 = () => {
  const { t } = useTranslation('global');


  return (
    <div>
        <NavBar className="custom-navbars" />
            <div className="inner-container1">
                <Link className='mirror-top-head' to="/Mirrors"><h1 >{t('turya-mirrors')}</h1></Link>
            </div>
        <div className="container-fluid detailed-turya-main-container">
            <div className="second-inner-turya-detailed-container">
            <div className="row">
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='maplemirror1' src={maplemirror1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='maplemirror2' src={maplemirror2} alt="" loading='lazy' />
                  <div className="product-description">
                      <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-maplemirror')} </p>
                      <p className='product-description-para-1'>  <span className='description-heads'>{t('turya-description')}</span> {t('turya-maplemirror-para')}
                      </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-2 maplemirror3-col3">
                <LazyLoadImage className='maplemirror3' src={maplemirror3} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-4">
                <LazyLoadImage className='maplemirror4' src={maplemirror4} alt="" loading='lazy' />
                </div>
            </div>
            </div>
            <div className="product-description-mobile">
                      <p className='product-description-para'><span className='description-heads'>{t('turya-name')}</span> {t('turya-maplemirror')} <br/>
                       <span className='description-heads'>{t('turya-description')}</span> {t('turya-maplemirror-para')}
                      </p>
                  </div>
        </div>
            <div className="arrow-container">
           <Link to="/MirrorDetail14"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link> 
           <Link to="/MirrorDetail1"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link>
            </div>
    </div>
  )
}

export default Mirrordetail15