import styled from 'styled-components';

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .3s;
`;
export const CardMain = styled.div`
    position: relative;
    overflow: hidden;
    height: 400px;
    cursor: pointer;
    &:hover {
        ${CardImage} {
            transform: scale(1.1);
        }
    }
`;
export const CardContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50%;
    gap: 8px;
    backdrop-filter: blur(10px);
    border: 2px solid #fff;
    background-color: #00000034;
    h2{
        font-size: 40px;
        line-height: 56px;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.07rem;
    }
    p{
        font-size: 18px;
        line-height: 32px;
        font-weight: 500;
        color: #fff;
        text-align: center;
        letter-spacing: 0.07rem;
    }
`;