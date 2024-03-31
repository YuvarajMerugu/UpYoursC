import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, Special } from '../components';
import Carousel from '../components/Carousel';


const Home = ({ products, bannerData, specialData }) => (

  <div>

    <Carousel heroBanners={bannerData} />
    <div className="products-heading">
      <h2>Courses Offered at UpYoursC</h2>
      <p></p>
    </div>
    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>



    <div className="products-heading">
      <h2>Our Team</h2>
      <p></p>
    </div>
    <div className="products-container">
      {specialData?.map((special) => <Special key={special._id} special={special} />)}
    </div>

    <FooterBanner />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);


  const specialQuery = '*[_type == "specials"]';
  const specialData = await client.fetch(specialQuery);


  return {
    props: { products, bannerData, specialData }
  }
}

export default Home;
