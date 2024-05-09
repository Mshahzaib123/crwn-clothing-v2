import styled, { css } from 'styled-components';

const subColor = '#b9b9b9';
const mainColor = 'black';
const whiteColor = 'white';

const shrinkLabel = css`
    top: -10px;
    padding: 0 10px;
    color: ${mainColor};
    transform: translateY(0);
`

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const FormInputLabel = styled.label`
    position: absolute;
    top: 50%;
    left: 16px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    color: ${subColor};
    background-color: ${whiteColor};
    transform: translateY(-50%);
    transition: .3s ease all;

    ${({ shrink }) => shrink && shrinkLabel}
`;
export const Input = styled.input`
    font-size: 16px;
    line-height: 24px;
    padding: 12px 16px;
    color: ${mainColor};
    border: 1px solid ${subColor};
    &:focus{
        outline: none;
    }
    &:focus ~ ${FormInputLabel}{
        ${shrinkLabel};
    }
`;