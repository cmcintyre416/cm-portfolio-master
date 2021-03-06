import styled from 'styled-components';

export const MainWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0px 50px;

    @media(max-width: 900px){
        padding: 0px 20px;
    }
`;

export const ContentWrapper = styled.div`
    width: 70%;
    margin: 60px auto;
    position: relative;

    @media(max-width: 900px){
        width: 100%;
    }
`;