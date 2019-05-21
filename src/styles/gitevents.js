import styled from 'styled-components';

export const GitEventsContainer = styled.div`
  background-color: white;
  padding: 15px 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  .gitEvents__event {
    border-bottom: 1px solid grey;
    padding: 10px 0;
  }

  @media (max-width: 900px){
    margin: 0px 50px;
  }

`;