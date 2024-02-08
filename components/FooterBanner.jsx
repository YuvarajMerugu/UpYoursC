import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = () => {
  return (
    <div className="footer-banner-container">
      <div className="banner-content">
        <div className="about-us">
          <h2 className="about-us-head">About Us</h2>
          <p className="about-us-main">At Eat Well, we're passionate about providing gym enthusiasts with a delectable selection of nutritious options, meticulously curated to support your fitness goals and keep you performing at your best!</p>
        </div>
        <div className='foot-banner'>
          <div className="banner-descc">
            <div className="left m-5">

              <Link href="/"><img src="/favicon.ico" alt="eatwell" width="100" height="100" /></Link>
            </div>
            <div className="left m-5">
              Currently we are Located at:
            </div>
            <div className="left m-5">
              Contact us:
            </div>
            <div className="right m-5">
              This is right
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
