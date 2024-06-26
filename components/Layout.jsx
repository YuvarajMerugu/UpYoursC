import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import Shadow from './Shadow';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>UpYoursC</title>
      </Head>
      <header className='color-bb'>
        <Navbar />
        <Shadow />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout