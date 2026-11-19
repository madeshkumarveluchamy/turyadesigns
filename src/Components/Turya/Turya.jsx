import React, { useEffect } from 'react';
import './Turya.css';
import NavBar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import product1 from './Turya-Images/mirrormainpage.webp';
import product2 from './Turya-Images/Accessories1.webp';
import product3 from './Turya-Images/Seating1.webp';
import product4 from './Turya-Images/Seating2.webp';
import product5 from './Turya-Images/teapoysandtables1.webp';
import product6 from './Turya-Images/tables1.webp';
import product7 from './Turya-Images/doors1.webp';
import product8 from './Turya-Images/trays1.webp';
import product9 from './Turya-Images/Accessories2.webp';
import product10 from './Turya-Images/bedroommain1.webp';
import product11 from './Turya-Images/clocks1.webp';
import product12 from './Turya-Images/Drawers.webp';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Turya = () => {
  const { t, i18n } = useTranslation('global');

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <NavBar className="custom-navbars" />
      <div className="container-fluid turya-landing-page">
        <div className='row justify-content-between turya-land-head-up'>

          <div className="col-6 col-sm-5 col-md-4 turya-landing-col1">{t('turya-designs')}</div>
          <div className="col-6 col-sm-5 col-md-8 turya-landing-col2">{t('turya-land-head')}<LazyLoadImage className='logo-turya-page' src={logo} alt="" loading='lazy' /></div>
          {/* <div className="col-3 col-sm-3 col-md-2 turya-land-col3"></div> */}
        </div>
  
        
        {/* Language Toggle Buttons Inside First Container */}
        <div className="language-buttons">
          <button onClick={() => handleLanguageChange('en')} className="btn btn-outline-primary">English</button>
          <button onClick={() => handleLanguageChange('ta')} className="btn btn-outline-primary">தமிழ்</button>
        </div>
      </div>

      <div className="container-fluid turya-second">
        <div className="row turya-second-row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 turya-menus-col">
            <ul>
              {/* <li>{t('turya-highlights')}</li> */}
              <li><Link className='menu-links' to="/Turya">{t('turya-highlights')}</Link></li>
              <li><Link className='menu-links' to="/Mirrors">{t('turya-mirrors')}</Link></li>
              <li><Link className='menu-links' to="/Seating">{t('turya-seating')}</Link></li>
              <li><Link className='menu-links' to="/Tables">{t('turya-tables')}</Link></li>          
              <li><Link className='menu-links' to="/Clocks">{t('turya-clocks')}</Link></li>
              <li><Link className='menu-links' to="/Bedrooms">{t('turya-bedroom')}</Link></li>
              <li><Link className='menu-links' to="/Drawers">{t('turya-drawers')}</Link></li>
              <li><Link className='menu-links' to="/Accessories">{t('turya-accessories')}</Link></li>
              <li><Link className='menu-links' to="/Doors">{t('turya-doors')}</Link></li>
              <li><Link className='menu-links' to="/Kitchen">{t('turya-kitchens')}</Link></li>
            </ul>
          </div>
          {/* <div className="col-10 col-sm-10 col-md-9 col-lg-10 turya-heading">
            {t('turya-main-head')}
          </div> */}
        </div>
        
        {/* Products Section */}
        <div className="row turya-product-row mt-4">
          <div className="col-12 col-sm-12 col-md-4 product-col">
            
          <Link to="/Mirrors "> <LazyLoadImage className='product-img' src={product1} alt="" loading='lazy' /> </Link> 
          <p className='turyamain-mirror'>{t('turya-mirrors')}</p> 
          </div>
          <div className="col-12 col-sm-12 col-md-4 product-col">
            
          <Link to="/Accessories "> <LazyLoadImage className='product-img w-100' src={product2} alt="" loading='lazy' /></Link>  
          <p className='turyamain-mirror'>{t('turya-accessories')}</p> 
          </div>
          <div className="col-12 col-sm-12 col-md-4 product-col">
            
          <Link to="Seating"> <LazyLoadImage className='product-img' src={product3} alt="" loading='lazy' /> </Link> 
          <p className='turyamain-seating'>{t('turya-seating')}</p>  
          </div>
        </div>

        <div className="row turya-product-row turya-product-row-2 align-self-end">
          <div className="col-12 col-sm-12 col-md-4 product-col row-2-col">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 product4-col product-col">
                 <Link to="/Seating"><LazyLoadImage className='product-img-2-row product4-img product-img' src={product4} alt="" loading='lazy' /> </Link> 
                  <p className='turyamain-seating2'>{t('turya-seating')}</p> 
              </div>
                 </div>
            <div className="row mt-4">
              <div className="col-12 col-sm-12 col-md-12 product-col">

              <Link to="/Tables"> <LazyLoadImage className='product-img-2-row product5-img product-img' src={product5} alt="" loading='lazy' /></Link>  
              <p className='turyamain-teapoy'>{t('turya-teapoy')} </p>  
              </div>
            </div>
            </div>
           
          <div className="col-12 col-sm-12 col-md-4 product-col row-2-col">
           
          <Link to="/Tables"> <LazyLoadImage className='product-img-2-row product6-img' src={product6} alt="" loading='lazy' /></Link>   
          <p className='turyamain-seating2'>{t('turya-tables')}</p>
          </div>
          <div className="col-12 col-sm-12 col-md-4 product-col row-2-col">
           
          <Link to="/Doors">  <LazyLoadImage className='product-img-2-row product7-img' src={product7} alt="" loading='lazy' /></Link>  
          <p className='turyamain-seating2'>{t('turya-doors')}</p>
          </div>
        </div>

        <div className="row turya-product-row turya-product-row-2 align-self-end">
          <div className="col-12 col-sm-12 col-md-8 product-col row-2-col">
          
          <Link to="/Accessories"> <LazyLoadImage className='product-img-2-row product8-img' src={product8} alt="" loading='lazy' /></Link>   
          <p className='turyamain-trays'>{t('turya-tray')}</p> 
          </div>
          <div className="col-12 col-sm-12 col-md-4 product-col row-2-col">
            
          <Link to="/Accessories"> <LazyLoadImage className='w-100' src={product9} alt="" loading='lazy' /></Link>   
          <p className='turyamain-mirror'>{t('turya-accessories')}</p>  
          </div>
        </div>
        <div className="row turya-product-row">
          <div className="col-12 col-sm-12 col-md-4 product-col">
          <Link to="/Bedrooms">  <LazyLoadImage className='product-img' src={product10} alt="" loading='lazy' /></Link> 
          <p className='turyamain-bedroom'>{t('turya-bedroom')} </p> 
          </div>
          <div className="col-12 col-sm-12 col-md-4 product-col">
          <p className='turyamain-mirror'>{t('turya-clocks')}</p> 
          <Link to="/Clocks">   <LazyLoadImage className='product-img' src={product11} alt="" loading='lazy' /></Link> 
          </div>
          <div className="col-12 col-sm-12 col-md-4 product-col">
          <Link to="/Drawers"> <LazyLoadImage className='product-img product12-img' src={product12} alt="" loading='lazy' /></Link>   
          <p className='turyamain-drawers'>{t('turya-drawers')}</p> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Turya;
