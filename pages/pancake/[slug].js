import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

const PancakeDetails = ({ product, products }) => {
    const { image, name, details, price, calories, fat, saturatedFat, transFat, sodium, carbs, fiber, sugars, protein, highlight } = product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    const handleBuyNow = () => {
        onAdd(product, qty);

        setShowCart(true);
    }

    return (
        <div>
            <div className="product-detail-container">
                <div>
                    <div className="image-container">
                        <img src={urlFor(image && image[index])} className="product-detail-image" />
                    </div>
                    <div className="small-images-container">
                        {image?.map((item, i) => (
                            <img
                                key={i}
                                src={urlFor(item)}
                                className={i === index ? 'small-image selected-image' : 'small-image'}
                                onMouseEnter={() => setIndex(i)}
                            />
                        ))}
                    </div>
                </div>

                <div className="product-detail-desc">
                    <h1>{name}</h1>

                    <p>{calories}&nbsp;{highlight}</p>

                    <h4>Nutrition Facts: </h4>
                    <div className="products-containerss">
                        <p >Fat &nbsp;</p>
                        <p >{fat}</p>
                        <p >Saturated Fat&nbsp; </p>
                        <p >{saturatedFat}</p>
                        <p >Trans Fat&nbsp; </p>
                        <p >{transFat}</p>
                        <p >Sodium&nbsp; </p>
                        <p >{sodium}</p>
                        <p>Carbs&nbsp; </p>
                        <p>{carbs}</p>
                        <p>Fiber&nbsp; </p>
                        <p>{fiber}</p>
                        <p >Sugars&nbsp; </p>
                        <p >{sugars}</p>
                        <p >Protein&nbsp; </p>
                        <p >{protein}</p>
                    </div>
                    <h4>List of Ingredients: </h4>
                    <p>{details}</p>
                    <p className="price-display">₹{price}</p>


                </div>
            </div>

            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                    <div className="maylike-products-container track">
                        {products.map((item) => (
                            <Product key={item._id} product={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "pancakes"] {
    slug {
      current
    }
  }
  `;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "pancakes" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    console.log(product);

    return {
        props: { products, product }
    }
}

export default PancakeDetails