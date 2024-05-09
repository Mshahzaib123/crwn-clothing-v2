import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { UserContexts } from '../../contexts/UserContexts';
import { signOutUser } from '../../utils/firebase/firebase';
import AddToCart from './AddToCart';
import {
    HeaderMain,
    HeaderWrapper,
    LogoWrapper,
    MenuWrapper,
    MenuUl,
    MenuLink
} from './HeaderStyled';

import { ReactComponent as LogoImg } from '../../img/brand-logo.svg';

const Header = () => {
    const { currentUser } = useContext(UserContexts);
    return (
        <>
            <HeaderMain>
                <div className='container_fluid'>
                    <HeaderWrapper>
                        <LogoWrapper to="/" className='logo_otr'>
                            <LogoImg className='logo_img' />
                        </LogoWrapper>
                        <MenuWrapper>
                            <MenuUl>
                                <li className='menu_li'>
                                    <MenuLink to='shop'>
                                        Shop
                                    </MenuLink>
                                </li>
                                <li className='menu_li'>
                                    <MenuLink to=''>
                                        Contact
                                    </MenuLink>
                                </li>
                                {currentUser ? (
                                    <li className='menu_li'>
                                        <MenuLink as='p' onClick={signOutUser}>
                                            Sign Out
                                        </MenuLink>
                                    </li>
                                ) : (
                                    <li className='menu_li'>
                                        <MenuLink to='auth'>
                                            Sign In
                                        </MenuLink>
                                    </li>
                                )}
                            </MenuUl>
                            <AddToCart />
                        </MenuWrapper>
                    </HeaderWrapper>
                </div>
            </HeaderMain>
            <Outlet/>
        </>
    )
}

export default Header