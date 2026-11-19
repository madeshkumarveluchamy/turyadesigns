import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Sofas4.css'
import belle1 from '../Images/belle1.webp'
import belle2 from '../Images/belle2.webp'
import belle3 from '../Images/belle3.webp'
import belle4 from '../Images/belle4.webp'
import arrowright from '../Images/Arrowright.png'
import arrowleft from '../Images/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sofas4 = () => {
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
                <div className="col-6 col-sm-6 col-md-4">
                <LazyLoadImage className='belle1' src={belle1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-4">
                <LazyLoadImage className='belle2' src={belle2} alt="" loading='lazy' />
                  <div className="product-description">
                  <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span>  {t('turya-roseofbellesofa')} </p>
                  <p className='product-description-para-1'>   <span className='description-heads'>{t('turya-description')}</span> {t('turya-roseofbellesofa-para')}
                      </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-4 belle3-col3">
                <LazyLoadImage className='belle3' src={belle3} alt="" loading='lazy' />
                </div>
                {/* <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='belle4' src={belle4} alt="" loading='lazy' />
                </div> */}
            </div>
            </div>
            <div className="product-description-mobile">
            <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span>  {t('turya-roseofbellesofa')} </p>
                  <p className='product-description-para-1'>   <span className='description-heads'>{t('turya-description')}</span> {t('turya-roseofbellesofa-para')}
                      </p>
                  </div>
        </div>
            <div className="arrow-container">
           <Link to="/Sofas3"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link> 
           <Link to="/Sofas5"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link>
            </div>
    </div>
  )
}

export default Sofas4