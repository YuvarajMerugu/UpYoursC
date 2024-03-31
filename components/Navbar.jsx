import React from 'react';
import Link from 'next/link';
import { AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai'
import { BiMap } from "react-icons/bi";

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {

  return (
    <div className="navbar-container">
      <p className="logo">
        <img src="/favicon.ico" alt="eatwell" width="32" height="32" />
        <Link href="/">UpYoursC</Link>
      </p>
      <p className="logo cursor-change">
        <div>
          <a href='' target='_blank' >
            <AiFillLinkedin className='iconn' onMouseOver={({ target }) => target.style.color = "blue"} onMouseOut={({ target }) => target.style.color = "black"} />
          </a>
        </div>
        <div>
          <a href='' target='_blank'>
            <AiTwotoneMail className='iconn' onMouseOver={({ target }) => target.style.color = "blue"} onMouseOut={({ target }) => target.style.color = "black"} />
          </a>
        </div>
      </p>

    </div>
  )
}

export default Navbar