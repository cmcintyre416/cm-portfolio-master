import styled from 'styled-components';
import { darkBlue, darkHoverBlue } from '../styles/colours';

export const BlueCta = styled.button`
    text-transform: uppercase;
    font-size: 0.7rem;
    background-color: ${darkBlue};
    color: white;
    padding: 10px 25px;
    border-radius: 200px;
    cursor: pointer;
    transition: 0.05s ease-in; 
    border: none;
    
    &:hover {
        transform:scale(1.1);
        box-shadow: 0 5px 5px lightgrey;
        background-color: ${darkHoverBlue};
        color: white;
    }
`;