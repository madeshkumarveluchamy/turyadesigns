import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Teapoy25.css'
import trinityteapoy1 from '../Images/trinityteapoy1.webp'
import trinityteapoy2 from '../Images/trinityteapoy2.webp'
import trinityteapoy3 from '../Images/trinityteapoy3.webp'
import trinityteapoy4 from '../Images/trinityteapoy4.webp'
import arrowright from '../Images/Arrowright.png'
import arrowleft from '../Images/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Teapoy25 = () => {
  const { t } = useTranslation('global');
 
  return (
    <div>
        <NavBar className="custom-navbars" />
            <div className="inner-container1">
            <Link className='mirror-top-head' to="/Tables"><h1 >TABLES</h1></Link>
            </div>
            <div className="container-fluid detailed-turya-main-container">
            <div className="second-inner-turya-detailed-container">
            
            <div className="row">
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='w-100 trinityteapoy1' src={trinityteapoy1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='trinityteapoy2' src={trinityteapoy4} alt="" loading='lazy' />
                  <div className="product-description">
                  <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-trinitytable1')} </p>
                  <p className='product-description-para-1'>   <span className='description-heads'>{t('turya-description')}</span>{t('turya-trinitytable1-para')}
                      </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-3 trinityteapoy3-col3">
                <LazyLoadImage className='trinityteapoy3' src={trinityteapoy3} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                <LazyLoadImage className='trinityteapoy4' src={trinityteapoy2} alt="" loading='lazy' />
                </div>
            </div>
            </div>
            <div className="product-description-mobile">
            <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> TRINITY TEAPOY SET </p>
                  <p className='product-description-para-1'>   <span className='description-heads'>{t('turya-description')}</span> A set of 3 teapoys that are stackable and can be versatile in styling and usage.
                      </p>
                  </div>
        </div>
            <div className="arrow-container">
           <Link to="/Table51"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link> 
           <Link to="/Table53"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link>
            </div>
    </div>
  )
}

export default Teapoy25