import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Sofas8.css'
import classicsofaset1 from '../Images/classicsofaset1.webp'
import classicsofaset2 from '../Images/classicsofaset2.webp'
import classicsofaset3 from '../Images/classicsofaset3.webp'
import classicsofaset4 from '../Images/classicsofaset4.webp'
import arrowright from '../Images/Arrowright.png'
import arrowleft from '../Images/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sofas8 = () => {
  const { t } = useTranslation('global');


  return (
    <div>
        <NavBar className="custom-navbars" />
            <div className="inner-container1">
            <Link className='mirror-top-head' to="/Mirrors"><h1 >{t('turya-seating')}</h1></Link>
            </div>
        <div className="container-fluid detailed-turya-main-container">
            <div className="second-inner-turya-detailed-container">
            <div className="row">
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='w-100 classicsofaset1' src={classicsofaset1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='classicsofaset2' src={classicsofaset2} alt="" loading='lazy' />
                  <div className="product-description">
                  <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span>  {t('turya-classicsofaset')} </p>
                  <p className='product-description-para-1'>   <span className='description-heads'>{t('turya-description')}</span> {t('turya-classicsofaset-para')}
                      </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-3 classicsofaset3-col3">
                <LazyLoadImage className='classicsofaset3' src={classicsofaset3} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='classicsofaset4' src={classicsofaset4} alt="" loading='lazy' />
                </div>
            </div>
            </div>
            <div className="product-description-mobile">
            <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span>  {t('turya-classicsofaset')} </p>
                  <p className='product-description-para-1'>   <span className='description-heads'>{t('turya-description')}</span> {t('turya-classicsofaset-para')}
                      </p>
                  </div>
            
        </div>
        <div className="arrow-container">
           <Link to="/Sofas7"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link> 
           <Link to="/Sofas9"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link>
            </div>
    </div>
  )
}

export default Sofas8