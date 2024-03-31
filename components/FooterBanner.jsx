import React from 'react';
import Link from 'next/link';
import { AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';
import { urlFor } from '../lib/client';

const FooterBanner = () => {
  return (
    <div className="footer-banner-container">
      <div className="banner-content">
        <div className="about-us">
          <h2 className="about-us-head">About Us</h2>
          <p className="about-us-main">Welcome to UpYoursC, where we're dedicated to empowering coders with top-tier instruction in DSA, algorithms, and coding techniques, ensuring you excel in the digital arena and reach new heights in your programming journey!</p>
        </div>
        <div className='foot-banner'>
          <div className="banner-descc">
            <div className="left m-5 foot-logo">

              <Link href="/"><img src="/favicon.ico" alt="UpYoursC" width="100" height="100" /></Link>
            </div>
            <div className="left m-5 contact">
              <div className='weightt'>
                Contact us:
              </div>
              <div>
                +91 9014688243
              </div>
              <div>
                +91 7780186920
              </div>
            </div>
            <div className="right m-5 social">
              <div className='weightt'>For Any queries:</div>
              <div>
                <a href='https://wa.me/7780186920?text=I%20want%20%to%order.' target='_blank'>
                  <AiOutlineWhatsApp /> Whatsapp
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/company/upyoursc/" target='_blank'>
                  <AiOutlineLinkedin /> LinkedIn
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/eatw.ell9" target='_blank'>
                  <AiOutlineMail /> Email
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className='footer-container'>
          <p>Copyright © 2024 UpYoursC. All Rights Reserved.</p>
          <p className='footer-cont'>Follow us on
            <p className="icons">
              <a href="https://www.instagram.com/eatw.ell9" target='_blank'><AiOutlineLinkedin /></a>
            </p>
          </p>

        </div>

      </div>

    </div>
  );
};

export default FooterBanner;
