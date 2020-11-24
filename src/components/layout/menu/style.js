import styled from 'styled-components';

export const Header = styled.div`
    position: fixed;
    top: 10px;
    left: 10px;
    width: 50px;
    background: #34495e;
    color: #fff;
    border-radius: 6px;
    height: calc(100vh - 20px);
    overflow: hidden;
    z-index: 9999;
    transition: width .1s;
    &:hover{
        width: 230px;
    }
`;

export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    padding: 6px;
    padding-left: 8px;
    span {
        margin-left: 7px;
        font-size: 16px;
    }
    &:hover{
        filter: brightness(0.9);
        cursor: pointer;
    }
`;

export const IconMenu = styled.div`
    border-radius: 100%;
    background: #fff;
    color:#323338;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 35px;
    min-height: 35px;
    font-size: 12px;
`;