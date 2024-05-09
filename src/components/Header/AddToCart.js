import React, { useContext } from 'react';
import { ShoppingCartSimple } from 'phosphor-react';
import ThemeButton, { BUTTON_TYPE } from '../ThemeButton/ThemeButton';
import { CartContext } from '../../contexts/CartContent';
import CartItems from './CartItems';
import { useNavigate } from 'react-router-dom';
import {
    CartMain,
    CartDropDown,
    CartEmpty,
    CartEmptyText
} from './HeaderStyled';

const AddToCart = () => {
    const { isCartOpen, setIsCartOpen, cartItems, cartCount } = useContext(CartContext);
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    }
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
    return (
        <>
            <CartMain onClick={toggleCart}>
                <div className='num_otr'>
                    <span className='addProduct_num'>
                        {cartCount}
                    </span>
                </div>
                <ShoppingCartSimple size={24} />
            </CartMain>
            {isCartOpen && (
                <CartDropDown>
                    <div className='product_list'>
                        {cartItems.length ? (
                            cartItems.map((item) => <CartItems key={item.id} cartItem={item} />)
                        ) : (
                            <CartEmpty>
                                <CartEmptyText>Your cart is empty.</CartEmptyText>
                            </CartEmpty>
                        )}
                    </div>
                    <ThemeButton
                        buttonType={BUTTON_TYPE.default}
                        onClick={goToCheckoutHandler}
                        children='Go To Checkout'
                    />
                </CartDropDown>
            )}
        </>
    )
}

export default AddToCart