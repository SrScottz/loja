import styled from 'styled-components';
export const Header = styled.div`
    width: 100%;
    height: 100%;
`;

export const Products = styled.div`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
`;

export const Item = styled.div`
    background: #fff;
    border-radius: 6px;
    padding: 10px;
    width: 200px;
    height: 200px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px;
    font-size: 12px;
    img {
        
        width: 70px;
    }
`;
