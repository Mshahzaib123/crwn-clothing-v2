import React from 'react';
import {
    InputWrapper,
    Input,
    FormInputLabel
 } from './FormInputStyled';

const FormInput = ({label, ...otherProps}) => {
    return (
        <InputWrapper>
            <Input {...otherProps}/>
            {label && (
                <FormInputLabel shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            )}
        </InputWrapper>
    )
}

export default FormInput