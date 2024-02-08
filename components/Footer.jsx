import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>© 2024 EatWell. All Rights Reserved.</p>
      <p>Follow us on</p>
      <p className="icons">
        <a href="https://www.instagram.com/eatw.ell9"><AiFillInstagram /></a>
      </p>
    </div>
  )
}

export default Footer