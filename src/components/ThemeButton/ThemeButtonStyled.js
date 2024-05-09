import styled from "styled-components";

export const Button = styled.button`
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    padding: 12px 32px;
    background-color: #000000;
    color: #ffffff;
    border: 1px solid #000000;
    text-transform: capitalize;
    transition: .3s;
    -webkit-transition: .3s;
    -moz-transition: .3s;
    -ms-transition: .3s;
    -o-transition: .3s;
    cursor: pointer;
    &:hover {
        background-color: #ffffff;
        color: #000000;
    }
`;
export const PrimaryButton = styled(Button)`
    background-color: #4285f4;
    color: #ffffff;
    border: 1px solid #4285f4;
    &:hover{
        background-color: #ffffff;
        color: #4285f4;
    }
`;
export const WhiteButton = styled(Button)`
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #000000;
    &:hover{
        background-color: black;
        color: #ffffff;
    }
`;