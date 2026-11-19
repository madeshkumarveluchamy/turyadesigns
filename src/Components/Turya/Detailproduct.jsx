import React from 'react'
import './Detailproduct.css'
import NavBar from '../Navbar/Navbar';
import mirror6 from './Turya-Images/mirror6.jpg';

const Detailproduct = () => {
  return (
    <div>
                <NavBar className="custom-navbar" />
        <div className="container-fluid detail-product">
            <div className="contain">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4">
                        <img className='image-fluid product-image' src={mirror6} alt="" srcset="" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-4">
                        <img className='image-fluid product-image' src={mirror6} alt="" srcset="" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-4">
                        <img className='image-fluid product-image' src={mirror6} alt="" srcset="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6">
                        <img className='image-fluid product-image' src={mirror6} alt="" srcset="" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                        <img className='image-fluid product-image' src={mirror6} alt="" srcset="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 col-sm-10 col-md-6">
                        <p className='product-detail-head'>TURYA DESIGNS</p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                        <h5 className='para-head'>ELEMENTAL PLAY</h5>
                     <p className='product-detail-para'>A set of coasters, with handcarved wood and polished,with beaten copper motifs, thematic with natural elements and designs that are handsketched.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Detailproduct