import React from 'react';
import './Turyaproduct.css';
import NavBar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import mirror1 from './Turya-Images/mirror1.jpg';
import mirror2 from './Turya-Images/mirror2.jpg';
import mirror3 from './Turya-Images/mirror3.jpg';
import mirror4 from './Turya-Images/mirror4.jpg';
import mirror5 from './Turya-Images/mirror5.jpg';
import mirror6 from './Turya-Images/mirror6.jpg';
import mirror7 from './Turya-Images/mirror7.jpg';
import mirror8 from './Turya-Images/mirror8.jpg';
import mirror9 from './Turya-Images/mirror9.jpg';
import mirror10 from './Turya-Images/mirror10.jpg';

const Turyaproduct = () => {
  return (
    <>
    <NavBar className="custom-navbar" />
    <div className="container-fluid turyaproduct">
      <div className="row turya-second-row justify-content-between">
        <div className="col-12 col-sm-12 col-md-3 turya-menu-col-1">
          <h5>TURYA DESIGNS</h5>
          <ul>
            <li>HIGHLIGHTS</li>
            <li><Link className='menu-links' to="/turyaproduct">All</Link></li>
            <li><Link className='menu-links' to="/Seating">SEATING</Link></li>
            <li><Link className='menu-links' to="/beds">BEDS</Link></li>
            <li><Link className='menu-links' to="/side-tables">SIDE TABLES</Link></li>
            <li><Link className='menu-links' to="/centre-tables">CENTRE TABLES</Link></li>
            <li><Link className='menu-links' to="/dining-tables">DINING TABLES</Link></li>
            <li><Link className='menu-links' to="/chest-of-drawers">CHEST OF DRAWERS</Link></li>
            <li><Link className='menu-links' to="/accessories">ACCESSORIES</Link></li>
          </ul>
        </div>
        <div className="col-12 col-sm-12 col-md-4 align-self-end turya-product-head">
           MIRROR
        </div>
      </div> 
      <div className="row product-grid mt-4">
        <div className="col-12 col-sm-12 col-md-6">
          <Link to="/detailproduct"><img src={mirror1} className="img-fluid product-image " alt="Mirror 1"/></Link>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-md-6">
          <div className="row inner-row-product">
            <div className="col-6">
            <img src={mirror8} className="img-fluid product-image" alt="Mirror 2"/>

            </div>
            <div className="col-6 ">
              <img src={mirror7} className="img-fluid product-image" alt="Mirror 3"/>
            </div>
          </div>
          <div className="row">
            <div className="col-">
              <img className='img-fluid product-image' src={mirror3} alt="" srcset="" />
            </div>
          </div>
        </div>
        </div>
        <div className="row product-grid">
          <div className="col-12 col-sm-12 col-md-3">
            <img className='image-fluid product-image' src={mirror4} alt="" srcset="" />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <img className='image-fluid product-image' src={mirror5} alt="" srcset="" />
          </div>
          <div className="col-12 col-sm-12 col-md-3">
            <img className='image-fluid product-image' src={mirror2} alt="" srcset="" />
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12">
                <img className='image-fluid product-image' src={mirror10} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row product-grid">
          <div className="col-12 col-sm-12 col-md-6">
            <img className='image-fluid product-image' src={mirror6} alt="" srcset="" />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <img className='image-fluid product-image' src={mirror9} alt="" srcset="" />
          </div>
        </div>
    </div>
    </>
  );
};

export default Turyaproduct;
