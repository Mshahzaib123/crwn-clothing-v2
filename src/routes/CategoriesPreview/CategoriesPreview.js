import React, { Fragment, useContext } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (
                    <div className='container_fluid'>
                        <CategoryPreview key={title} title={title} products={products} />
                    </div>
                );
            })}
        </Fragment>
    )
}

export default CategoriesPreview