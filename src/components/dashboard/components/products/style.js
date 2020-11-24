
import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
`;
export const ActionsTable = styled.div`
    color: #2980b9;
    cursor: pointer;
    span{
        &:nth-child(1){
            margin-right: 14px;
            color: #e74c3c;
        }
        &:hover{
            filter: brightness(0.9);
        }
    }
`;
export const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    input {
        background: #f3f3f5;
        width: 200px;
        transition: width .1s;
        border: 0;
        padding: 0 7px;
        &:focus{
            width: 250px;
        }
    }
`;