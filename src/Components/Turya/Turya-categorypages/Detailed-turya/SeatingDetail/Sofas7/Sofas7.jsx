import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Sofas7.css'
import benches1 from '../Images/benches1.webp'
import benches2 from '../Images/benches2.webp'
import benches3 from '../Images/benches3.webp'
import benches4 from '../Images/benches4.webp'
import arrowright from '../Images/Arrowright.png'
import arrowleft from '../Images/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sofas7 = () => {
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
                <LazyLoadImage className='w-100 benches1' src={benches1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='benches2' src={benches2} alt="" loading='lazy' />
                  <div className="product-description">
                  <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span>  {t('turya-thebenches')} </p>
                  <p className='product-description-para-1'>   <span className='description-heads'>{t('turya-description')}</span> {t('turya-thebenches-para')}
                      </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-3 benches3-col3">
                <LazyLoadImage className='benches3' src={benches3} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='benches4' src={benches4} alt="" loading='lazy' />
                </div>
            </div>
            </div>
            <div className="product-description-mobile">
            <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span>  {t('turya-thebenches')}</p>
                  <p className='product-description-para-1'>   <span className='description-heads'>{t('turya-description')}</span> {t('turya-thebenches-para')}
                      </p>
                  </div>
           
        </div>
        <div className="arrow-container">
           <Link to="/Sofas6"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link> 
           <Link to="/Sofas8"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link>
            </div>
    </div>
  )
}

export default Sofas7