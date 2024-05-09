import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import ProductCard from '../ShopPage/ProductCard';

import './Category.scss';

function Category() {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
    return (
        <div className='category-page'>
            <div className='container_fluid'>
                <h2 className='title'>
                    {category.toUpperCase()}
                </h2>
                <div className='preview'>
                    {products && products.map((product) =>
                        <ProductCard key={product.id} product={product} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Category