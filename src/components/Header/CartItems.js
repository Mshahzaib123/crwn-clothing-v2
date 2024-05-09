import React from 'react';
import {
    CartItem,
    CartItemImage,
    CartItemContent,
    CartItemQuantityPrice
} from './HeaderStyled';

const CartItems = ({ cartItem }) => {
    const { name, imageUrl, price, quantity} = cartItem;
    return (
        <CartItem>
            <div className='img_otr'>
                <CartItemImage className='product_img' src={imageUrl} alt={`${name}`} />
            </div>
            <CartItemContent>
                <h3 className='cart_heading'>
                    {name}
                </h3>
                <CartItemQuantityPrice>
                    <p className='quantity'>{quantity}</p>
                    <span>X</span>
                    <p className='price'>${price}</p>
                </CartItemQuantityPrice>
            </CartItemContent>
        </CartItem>
    )
}

export default CartItems