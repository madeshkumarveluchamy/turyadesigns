import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Mirrordetail9.css'
import Bahunia1 from '../DetailImages/Bahunia1.jpg'
import Bahunia2 from '../DetailImages/Bahunia2.jpg'
import Bahunia3 from '../DetailImages/Bahunia3.jpg'
import Bahunia4 from '../DetailImages/Bahunia4.jpg'
import arrowright from '../DetailImages/Arrowright.png'
import arrowleft from '../DetailImages/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Mirrordetail9 = () => {
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
                <LazyLoadImage className='bahunia1' src={Bahunia1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='bahunia2' src={Bahunia2} alt="" loading='lazy' />
                  <div className="product-description">
                      <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-leafmirror')}</p>
                      <p className='product-description-para-1'><span className='description-heads'>{t('turya-description')}</span> {t('turya-leafmirror-para')}
                      </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-2 bahunia3-col3">
                <LazyLoadImage className='bahunia3' src={Bahunia3} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-4">
                <LazyLoadImage className='bahunia4' src={Bahunia4} alt="" loading='lazy' />
                </div>
            </div>
            </div>
            <div className="product-description-mobile">
                      <p className='product-description-para'><span className='description-heads'>{t('turya-name')}</span> {t('turya-leafmirror')} <br/>
                       <span className='description-heads'>{t('turya-description')}</span> {t('turya-leafmirror-para')}
                      </p>
                  </div>
        </div>
            <div className="arrow-container">
           <Link to="/MirrorDetail8"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link> 
           <Link to="/MirrorDetail10"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link>
            </div>
    </div>
  )
}

export default Mirrordetail9