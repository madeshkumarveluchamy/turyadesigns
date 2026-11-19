import React from 'react';
import NavBar from '../../../../../Navbar/Navbar';
import './Mirrordetail4.css';
import sunmirror from '../DetailImages/Sun.webp';
import arrowright from '../DetailImages/Arrowright.png';
import arrowleft from '../DetailImages/Arrowleft.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Mirrordetail4 = () => {
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
               
                <div className="col-12 col-sm-12 col-md-6 guncol1 order-2 order-md-1">
                {/* <LazyLoadImage className='chikkimirror2' src={chikkimirror2} alt="" loading='lazy' /> */}
                  <div className="product-description-signle-container">
                      <p className='product-description-para-2-sunmoon'>
                          <span className='description-heads'>{t('turya-name')}</span>{t('turya-sunmoonmirror')}</p>
                          <p className='product-description-para-2-sunmoon'>  <span className='description-heads'>{t('turya-description')}</span> {t('turya-sunmoonmirror-para')}
                      </p>
                  </div>
                </div>
               
                <div className="col-12 col-sm-12 col-md-6 guncol2 order-1 order-md-2">
                <LazyLoadImage className='sunmirror1' src={sunmirror} alt="" loading='lazy' />
                </div>
            </div>
            </div>
        </div>
            <div className="arrow-container">
           <Link to="/MirrorDetail3"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /></Link> 
            <Link to="/MirrorDetail5"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /></Link>
            </div>
    </div>
  )
}

export default Mirrordetail4