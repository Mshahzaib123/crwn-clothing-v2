import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    CardMain,
    CardImage,
    CardContent,
 } from './CategoryComponentStyled';

function CategorieCard({ category }) {
    const { cardImg, cardHeading, route } = category;
    const navigate = useNavigate();
    
    const onNavigateHandler = () => navigate(route);
    return (
        <CardMain onClick={onNavigateHandler}>
            <CardImage src={cardImg} alt='img'/>
            <CardContent className='card_inr'>
                <h2>
                    {cardHeading}
                </h2>
                <p>
                    Shop Now
                </p>
            </CardContent>
        </CardMain>
    )
}

export default CategorieCard