import React from 'react';
import {
    Button,
    PrimaryButton,
    WhiteButton
} from './ThemeButtonStyled';

export const BUTTON_TYPE = {
    default: 'theme_button',
    primary: 'primary_button',
    white: 'white_button'
}
const getButton = (buttonType = BUTTON_TYPE.default) => (
    {
        [BUTTON_TYPE.default]: Button,
        [BUTTON_TYPE.primary]: PrimaryButton,
        [BUTTON_TYPE.white]: WhiteButton,
    }[buttonType]
)
const ThemeButton = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>
    )
}

export default ThemeButton