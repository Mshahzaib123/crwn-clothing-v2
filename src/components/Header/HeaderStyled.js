import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderMain = styled.header`
    position: relative;
    padding: 24px 0;
    z-index: 99999;
`;
export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo_otr{
        display: flex;
        .logo_img{
            height: 40px;
            width: auto;
            object-fit: contain;
            object-position: left;
        }
    }
`;
export const LogoWrapper = styled(Link)`
    display: flex;
    .logo_img{
        height: 40px;
        width: auto;
        object-fit: contain;
        object-position: left;
    }
`;
export const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;
export const MenuUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 24px;
`;
export const MenuLink = styled(Link)`
    font-size: 16px;
    line-height: 28px;
    font-weight: 500;
    color: #0000007c;
    cursor: pointer;
    text-transform: uppercase;
    transition: .3s;
    &:hover{
        color: #000;
    }
`;

export const CartMain = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background-color: #00000015;
    transition: .3s;
    cursor: pointer;
    &:hover {
        background-color: #000;
        svg {
            color: #fff;
        }
        .num_otr{
            background-color: #4285f4;
        }
    }
    svg {
        color: #0000007c;
        transition: .3s;
    }
    .num_otr{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -6px;
        right: -6px;
        background-color: #000;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        transition: .3s;
    }
    .addProduct_num{
        font-size: 12px;
        line-height: 14px;
        font-weight: 600;
        color: #fff;
    }
`;
export const CartDropDown = styled.div`
    position: absolute;
    right: 50px;
    top: 90px;
    width: 350px;
    background-color: #fff;
    border: 1px solid #000;
    padding: 24px;
    .product_list{
        display: flex;
        flex-direction: column;
        height: 250px;
        overflow-y: auto;
        gap: 16px;
    }
    button{
        width: 100%;
    }
`;
export const CartEmpty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;
export const CartEmptyText = styled.p`
    font-size: 18px;
    line-height: 20px;
    color: black;
`;
export const CartItem = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
export const CartItemImage = styled.img`
    width: 80px;
    height: 100px;
    object-fit: cover;
    object-position: center;
`;
export const CartItemContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;
export const CartItemQuantityPrice = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    p{
        font-size: 16px;
        line-height: 20px;
        color: black;
    }
    span{
        font-size: 12px;
        line-height: 20px;
        color: black;
    }
`;