import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Accessories25.css'
import keyholder1 from '../Images/keyholder.jpg'
import arrowright from '../Images/Arrowright.png'
import arrowleft from '../Images/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Accessories25 = () => {
   const { t } = useTranslation('global');
  return (
    <div>
        <NavBar className="custom-navbars" />
            <div className="inner-container1">
            <Link className='top-head-accessories' to="/Accessories"><h1>{t('turya-accessories')}</h1></Link>  
            </div>
            <div className="container-fluid detailed-turya-main-container">
            <div className="second-inner-turya-detailed-container">
            
            <div className="row">
               
                <div className="col-11 col-sm-11 col-md-6 guncol1 order-2 order-md-1">
                
                  <div className="product-description-signle-container">
                      <p className='product-description-para-3'><span className='description-heads'>{t('turya-name')}</span> {t('turya-keyholders')}  </p>
                      <p className='product-description-para-3'><span className='description-heads'>{t('turya-description')}</span> {t('turya-keyholders-para')}
                      </p>
                  </div>
                </div>
               
                <div className="col-12 col-sm-12 col-md-6 guncol2 order-1 order-md-2">
                <LazyLoadImage className='keyholder1' src={keyholder1} alt="" loading='lazy' />
                </div>
            </div>
            </div>
        </div>
            <div className="arrow-container">
           <Link to="/Accessories24"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /></Link> 
            <Link to="/Accessories26"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /></Link>
            </div>
    </div>
  )
}

export default Accessories25