import React, { useContext } from 'react';
import ThemeButton, { BUTTON_TYPE } from '../../components/ThemeButton/ThemeButton';
import { CartContext } from '../../contexts/CartContent';

import './ShopPage.scss'

const ProductCard = ({product}) => {
    const { imageUrl, name, price } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => {
        addItemToCart(product);
    }
    return (
        <div className='shop_card_otr'>
            <div className='shop_card_inr'>
                <div className='img_otr'>
                    <div className='button_otr'>
                        <ThemeButton
                            onClick={addProductToCart}
                            buttonType={BUTTON_TYPE.white}
                            children='Shop Now'
                        />
                    </div>
                    <img className='card_img' src={imageUrl} alt={`${name}`}/>
                </div>
                <div className='heading_price'>
                    <h3 className='card_heading'>
                        {name}
                    </h3>
                    <p className='card_price'>
                        {price}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard