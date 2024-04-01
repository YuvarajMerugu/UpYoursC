import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const Special = ({ special: { image, name, slug, price, calories, highlight } }) => {
    return (
        <div>
            
                <div className="product-card">
                    <img
                        src={urlFor(image && image[0])}
                        width={250}
                        height={250}
                        className="product-image"
                    />
                    <p className="product-name">{name}</p>
                    {highlight && <p className="extra-info">{calories}&nbsp;|&nbsp;{highlight}</p>}
                    {!highlight && <p className="extra-info">{calories}</p>}
                </div>
            
        </div>
    )
}

export default Special