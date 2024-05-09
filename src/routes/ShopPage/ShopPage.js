import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import Category from '../Category/Category';

import './ShopPage.scss';

const ShopPage = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=':category' element={<Category/>}/>
        </Routes>
    )
}

export default ShopPage