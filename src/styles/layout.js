import styled from "styled-components";

export const SiteWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  `;

export const LayoutWrapper = styled.div`
  height: 100%;

  .navContainer {
    width: 250px;
    transition: 1s ease;

    .mainNav {
      opacity: 1;
      max-height: 200px;
      transform: translateX(0);
      transition: 1.5s ease;
    }

    .mainSocial {
      opacity: 1;
      transform: translateX(0);
      transition: 1.5s ease;
    }
}

.closed {
  /* transform: translateX(-200px); */
  width: 50px;
  transition: 1s ease;

  .mainNav {
    opacity: 0;
    max-height: 200px;
    transform: translateX(-200px);
    transition: 0.8s ease;
  }

  .mainSocial {
    opacity: 0;
    transform: translateX(-200px);
    transition: 0.8s ease;
  }
}
`;