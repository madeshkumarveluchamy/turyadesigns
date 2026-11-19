import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Chair22.css'
import thestand1 from '../Images/thestand1.webp'
import arrowright from '../Images/Arrowright.png'
import arrowleft from '../Images/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Chair22 = () => {
  const { t } = useTranslation('global');


  return (
    <div>
        <NavBar className="custom-navbars" />
            <div className="inner-container1">
            <Link className='top-head-accessories' to="/Seating"><h1>{t('turya-seating')}</h1></Link>  
            </div>
        <div className="container-fluid detailed-turya-main-container">
            <div className="second-inner-turya-detailed-container">
            <div className="row">
               
                <div className="col-11 col-sm-11 col-md-6 guncol1 order-2 order-md-1">
                {/* <LazyLoadImage className='chikkimirror2' src={chikkimirror2} alt="" loading='lazy' /> */}
                  <div className="product-description-signle-container-spc-font">
                      <p className='product-description-para-3'><span className='description-heads'>{t('turya-name')}</span>{t('turya-thestand')}</p>
                      <p className='product-description-para-3'><span className='description-heads'>{t('turya-description')}</span>{t('turya-thestand-para')}
                      </p>
                  </div>
                </div>
               
                <div className="col-12 col-sm-12 col-md-6 guncol2 order-1 order-md-2">
                <LazyLoadImage className='thestand1' src={thestand1} alt="" loading='lazy' />
                </div>
            </div>
            </div>
        </div>
            <div className="arrow-container">
           <Link to="/Chair21"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /></Link> 
            <Link to="/Chair23"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /></Link>
            </div>
    </div>
  )
}

export default Chair22