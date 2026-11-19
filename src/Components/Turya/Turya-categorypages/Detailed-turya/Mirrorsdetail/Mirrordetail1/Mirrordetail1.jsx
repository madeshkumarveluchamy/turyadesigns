import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Mirrordetail1.css'
import chikkimirror1 from '../DetailImages/Chikki Mirror1.webp'
import chikkimirror2 from '../DetailImages/Chikki Mirror 2.webp'
import chikkimirror3 from '../DetailImages/Chikki mirror3.webp'
import chikkimirror4 from '../DetailImages/Chikki mirror4.webp'
import arrowright from '../DetailImages/Arrowright.png'
import arrowleft from '../DetailImages/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Mirrordetail1 = () => {
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
                <LazyLoadImage className='chikkimirror1' src={chikkimirror1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='chikkimirror2' src={chikkimirror2} alt="" loading='lazy' />
                  <div className="product-description">
                      <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-chikkimirror')} </p>
                      <p className='product-description-para-1'> <span className='description-heads'>{t('turya-description')}</span> {t('turya-chikkimirror-para')}
                      </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-2 chikkimirror3-col3">
                <LazyLoadImage className='chikkimirror3' src={chikkimirror3} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-4">
                <LazyLoadImage className=' chikkimirror4' src={chikkimirror4} alt="" loading='lazy' />
                </div>
            </div>
            </div>
            <div className="product-description-mobile">
                      <p className='product-description-para'><span className='description-heads'>{t('turya-name')}</span>{t('turya-chikkimirror')} <br/>
                       <span className='description-heads'>{t('turya-description')}</span> {t('turya-chikkimirror-para')}
                      </p>
                  </div>
        </div>
            <div className="arrow-container">
           <Link to="/MirrorDetail15"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link> 
           <Link to="/MirrorDetail2"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link>
            </div>
    </div>
  )
}

export default Mirrordetail1