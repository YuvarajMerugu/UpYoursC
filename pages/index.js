import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, FreshJuice, Special, Pancake, Sandwich, WarmBowl, PowerLift } from '../components';
import Carousel from '../components/Carousel';


const Home = ({ products, bannerData, freshjuiceData, specialData, pancakesData, sandwichesData, warmbowlsData, powerlifterData }) => (
  
  <div>
  
    <Carousel heroBanners={bannerData} />
   
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <div className="products-heading">
      <h2>Fresh Juices</h2>
      <p>speaker There are many variations passages</p>
    </div>
    <div className="products-container">
      {freshjuiceData?.map((freshjuice) => <FreshJuice key={freshjuice._id} freshjuice={freshjuice} />)}
    </div>

    <div className="products-heading">
      <h2>EatWell Specials</h2>
      <p>speaker There are many variations passages</p>
    </div>
    <div className="products-container">
      {specialData?.map((special) => <Special key={special._id} special={special} />)}
    </div>

    <div className="products-heading">
      <h2>Pancakes</h2>
      <p>speaker There are many variations passages</p>
    </div>
    <div className="products-container">
      {pancakesData?.map((pancake) => <Pancake key={pancake._id} pancake={pancake} />)}
    </div>

    <div className="products-heading">
      <h2>Sandwiches</h2>
      <p>speaker There are many variations passages</p>
    </div>
    <div className="products-container">
      {sandwichesData?.map((sandwich) => <Sandwich key={sandwich._id} sandwich={sandwich} />)}
    </div>

    <div className="products-heading">
      <h2>Warm Bowls</h2>
      <p>speaker There are many variations passages</p>
    </div>
    <div className="products-container">
      {warmbowlsData?.map((warmbowl) => <WarmBowl key={warmbowl._id} warmbowl={warmbowl} />)}
    </div>

    <div className="products-heading">
      <h2>Power Lifter Special</h2>
      <p>speaker There are many variations passages</p>
    </div>
    <div className="products-container">
      {powerlifterData?.map((powerlift) => <PowerLift key={powerlift._id} powerlift={powerlift} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const freshjuiceQuery = '*[_type == "freshjuice"]';
  const freshjuiceData = await client.fetch(freshjuiceQuery);

  const specialQuery = '*[_type == "specials"]';
  const specialData = await client.fetch(specialQuery);

  const pancakesQuery = '*[_type == "pancakes"]';
  const pancakesData = await client.fetch(pancakesQuery);

  const sandwichesQuery = '*[_type == "sandwiches"]';
  const sandwichesData = await client.fetch(sandwichesQuery);

  const warmbowlsQuery = '*[_type == "warmbowls"]';
  const warmbowlsData = await client.fetch(warmbowlsQuery);

  const powerlifterQuery = '*[_type == "powerlifter"]';
  const powerlifterData = await client.fetch(powerlifterQuery);
  console.log(powerlifterData);
  return {
    props: { products, bannerData, freshjuiceData, specialData, pancakesData, sandwichesData, warmbowlsData, powerlifterData }
  }
}

export default Home;
