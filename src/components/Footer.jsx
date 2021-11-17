import React from 'react';
import '../Footer.css';
import { Link } from 'react-router-dom';
import {
    FaGithub
} from 'react-icons/fa';
import logo from '../assets/nn-white.png';

const Footer = () => {
    return (
        <div className='footer-container'>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <small className='website-rights'></small>
            <div className='social-icons'>
              <a
                className='social-icon-link'
                href={
                  '//www.github.com/nnorx'
                }
                target='_blank'
                aria-label='Github'
              >
                <FaGithub />
              </a>
              <a
                className='social-icon-link'
                href={
                  '//www.nicknorcross.com/'
                }
                target='_blank'
                aria-label='NickNorcross.com'
              >
                <img className='nn-logo' src={logo} alt="" />
              </a>
            </div>
          </div>
        </section>
      </div>
    )
}

export default Footer;
