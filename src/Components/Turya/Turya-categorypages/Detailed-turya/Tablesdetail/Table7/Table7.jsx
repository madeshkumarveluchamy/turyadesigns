import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Table7.css'
import kaju1 from '../Images/kaju1.webp'
import kaju2 from '../Images/kaju2.webp'
import kaju3 from '../Images/kaju3.webp'
import kaju4 from '../Images/kaju4.webp'
import arrowright from '../Images/Arrowright.png'
import arrowleft from '../Images/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Table7 = () => {
  const { t } = useTranslation('global');
 
  return (
    <div>
        <NavBar className="custom-navbars" />
            <div className="inner-container1">
            <Link className='mirror-top-head' to="/Tables"><h1>{t('turya-tables')}</h1></Link>
            </div>
            <div className="container-fluid detailed-turya-main-container">
            <div className="second-inner-turya-detailed-container">
            
            <div className="row">
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='w-100 kaju1' src={kaju1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='kaju2' src={kaju4} alt="" loading='lazy' />
                  <div className="product-description">
                  <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span>{t('turya-kajutable')} </p>
                  <p className='product-description-para-1'>   <span className='description-heads'>{t('turya-description')}</span> {t('turya-kajutable-para')}
                      </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-3 kaju3-col3">
                <LazyLoadImage className='kaju3' src={kaju3} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='kaju4' src={kaju2} alt="" loading='lazy' />
                </div>
            </div>
            </div>
            <div className="product-description-mobile">
            <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span>{t('turya-kajutable')} </p>
                  <p className='product-description-para-1'>   <span className='description-heads'>{t('turya-description')}</span> {t('turya-kajutable-para')}
                      </p>
                  </div>
        </div>
            <div className="arrow-container">
           <Link to="/Table19"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link> 
           <Link to="/Table21"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link>
            </div>
    </div>
  )
}

export default Table7