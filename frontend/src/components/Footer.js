import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container-fluid footer-container'>
        <div className='row justify-content-center'>
          <div className='col-2 footer-detail'>
            <h6 className='footer-head'>ABOUT</h6>
            <ul className='list-unstyled'>
              <li>
                <Link to='#' className='footer-item'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-item'>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-item'>
                  Carrers
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-2 footer-detail'>
            <h6 className='footer-head'>HELP</h6>
            <ul className='list-unstyled'>
              <li>
                <Link to='#' className='footer-item'>
                  Payments
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-item'>
                  Shipping
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-item'>
                  Cancellation &amp; Returns
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-item'>
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-2 footer-detail'>
            <h6 className='footer-head'>POLICY</h6>
            <ul className='list-unstyled'>
              <li>
                <Link to='#' className='footer-item'>
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-item'>
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-item'>
                  Security
                </Link>
              </li>
              <li>
                <Link to='#' className='footer-item'>
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div className='col-2 footer-detail'>
            <h6 className='footer-head'>Registered Address:</h6>
            <p className='footer-item'>
              Conestoga College,
              <br />
              Main Avenue
              <br />
              Waterloo - 110001
              <br />
              Canada
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
