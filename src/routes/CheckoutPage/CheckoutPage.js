import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContent';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import './CheckoutPage.scss'

function CheckoutPage() {
    const {
        cartItems,
        cartTotal
    } = useContext(CartContext);
    if (!cartItems || cartItems.length === 0) {
        return <div className='CheckoutPage_main'>No items in the cart</div>;
    }

    return (
        <div className='CheckoutPage_main'>
            <div className='checkout-header '>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    );
}

export default CheckoutPage;