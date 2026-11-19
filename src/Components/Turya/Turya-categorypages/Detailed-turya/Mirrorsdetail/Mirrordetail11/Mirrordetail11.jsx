import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Mirrordetail11.css'
import Goldfoil1 from '../DetailImages/Goldfoil1.jpg'
import Goldfoil2 from '../DetailImages/Goldfoil2.jpg'
import Goldfoil3 from '../DetailImages/Goldfoil3.jpg'
import Goldfoil4 from '../DetailImages/Goldfoil4.jpg'
import arrowright from '../DetailImages/Arrowright.png'
import arrowleft from '../DetailImages/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Mirrordetail11 = () => {
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
                <LazyLoadImage className='Goldfoil1' src={Goldfoil1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='Goldfoil2' src={Goldfoil2} alt="" loading='lazy' />
                  <div className="product-description">
                      <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-goldmirror')} </p>
                      <p className='product-description-para-1'><span className='description-heads'>{t('turya-description')}</span>   {t('turya-goldmirror-para')}
                      </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-2 Goldfoil3-col3">
                <LazyLoadImage className='Goldfoil3' src={Goldfoil3} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-4">
                <LazyLoadImage className='Goldfoil4' src={Goldfoil4} alt="" loading='lazy' />
                </div>
            </div>
            </div>
            <div className="product-description-mobile">
                      <p className='product-description-para'><span className='description-heads'>{t('turya-name')}</span> {t('turya-goldmirror')} <br/>
                       <span className='description-heads'>{t('turya-description')}</span>  {t('turya-goldmirror-para')}
                      </p>
                  </div>
        </div>
            <div className="arrow-container">
           <Link to="/MirrorDetail10"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link> 
           <Link to="/MirrorDetail12"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link>
            </div>
    </div>
  )
}

export default Mirrordetail11