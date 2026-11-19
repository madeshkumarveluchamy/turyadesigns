import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Table5.css'
import fallfloor1 from '../Images/fallfloor1.webp'
import fallfloor2 from '../Images/fallfloor2.webp'
import fallfloor3 from '../Images/fallfloor3.webp'
import fallfloor4 from '../Images/fallfloor4.webp'
import arrowright from '../Images/Arrowright.png'
import arrowleft from '../Images/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Table5 = () => {
  const { t } = useTranslation('global');
 
  return (
    <div>
        <NavBar className="custom-navbars" />
            <div className="inner-container1">
            <Link className='mirror-top-head' to="/Mirrors"><h1>{t('turya-tables')}</h1></Link>
            </div>
            <div className="container-fluid detailed-turya-main-container">
            <div className="second-inner-turya-detailed-container">
            
            <div className="row">
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='w-100 fallfloor1' src={fallfloor1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='fallfloor2' src={fallfloor4} alt="" loading='lazy' />
                  <div className="product-description">
                  <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span>  {t('turya-fallfloortable')} </p>
                  <p className='product-description-para-1'>   <span className='description-heads'>{t('turya-description')}</span> {t('turya-fallfloortable-para')}
                      </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-3 fallfloor3-col3">
                <LazyLoadImage className='fallfloor3' src={fallfloor3} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='fallfloor4' src={fallfloor2} alt="" loading='lazy' />
                </div>
            </div>
            </div>
            <div className="product-description-mobile">
            <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-fallfloortable')} </p>
                  <p className='product-description-para-1'>   <span className='description-heads'>{t('turya-description')}</span> {t('turya-fallfloortable-para')}
                      </p>
                  </div>
        </div>
            <div className="arrow-container">
           <Link to="/Table17"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link> 
           <Link to="/Table19"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link>
            </div>
    </div>
  )
}

export default Table5