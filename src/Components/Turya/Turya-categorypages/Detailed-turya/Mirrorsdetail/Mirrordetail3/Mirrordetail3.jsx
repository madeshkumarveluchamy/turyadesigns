import React from 'react'
import NavBar from '../../../../../Navbar/Navbar';
import './Mirrordetail3.css'
import rusticmirror1 from '../DetailImages/rusticmirror1.webp'
import rusticmirror2 from '../DetailImages/rusticmirror2.webp'
import rusticmirror3 from '../DetailImages/rusticmirror3.webp'
import rusticmirror4 from '../DetailImages/rusticmirror4.webp'
import arrowright from '../DetailImages/Arrowright.png'
import arrowleft from '../DetailImages/Arrowleft.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Mirrordetail3 = () => {
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
                <div className="col-6 col-sm-6 col-md-3 rusticmirror3-col1">
                <LazyLoadImage className='rusticmirror1' src={rusticmirror1} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-3 rusticmirror3-col2">
                <LazyLoadImage className='rusticmirror2' src={rusticmirror2} alt="" loading='lazy' />
                  <div className="product-description">
                      <p className='product-description-para-1'><span className='description-heads'>{t('turya-name')}</span> {t('turya-rusticmirror')}</p>
                      <p className='product-description-para-1'> <span className='description-heads'>{t('turya-description')}</span> {t('turya-rusticmirror-para')}

                      </p>
                  </div>
                </div>
                <div className="col-6 col-sm-6 col-md-2 rusticmirror3-col3">
                <LazyLoadImage className='rusticmirror3' src={rusticmirror3} alt="" loading='lazy' />
                </div>
                <div className="col-6 col-sm-6 col-md-4 rusticmirror3-col4">
                <LazyLoadImage className='rusticmirror4-img' src={rusticmirror4} alt="" loading='lazy' />
                </div>
            </div>
            </div>
            <div className="product-description-mobile">
                      <p className='product-description-para'><span className='description-heads'>{t('turya-name')}</span> {t('turya-rusticmirror')} <br/>
                       <span className='description-heads'>{t('turya-description')}</span> {t('turya-rusticmirror-para')}

                      </p>
                  </div>
        </div>
            <div className="arrow-container">
          <Link to="/MirrorDetail2"><LazyLoadImage className='arrowleft' src={arrowleft} alt="" loading='lazy' /> </Link>  
          <Link to="/MirrorDetail4"><LazyLoadImage className='arrowright' src={arrowright} alt="" loading='lazy' /> </Link> 
            </div>
    </div>
  )
}

export default Mirrordetail3