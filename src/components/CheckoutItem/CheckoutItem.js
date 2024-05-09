import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContent';
import { X, CaretLeft, CaretRight } from 'phosphor-react';

import './CheckoutItem.scss'

function CheckoutItem({ cartItem }) {
    const { name, imageUrl, price, quantity } = cartItem;
    
    const {
        addItemToCart,
        removeItemToCart,
        clearItemFromCart
    } = useContext(CartContext);
    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <button className='arrow' onClick={removeItemHandler}>
                    <CaretLeft size={24} />
                </button>
                <span className='value'>{quantity}</span>
                <button className='arrow' onClick={addItemHandler}>
                    <CaretRight size={24} />
                </button>
            </div>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>
                <X size={24} />
            </div>
        </div>
    )
}

export default CheckoutItem