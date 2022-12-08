import styled from "styled-components";
import bgDesktop from '../../images/bg-main-desktop.png';
import bgMobile from '../../images/bg-main-mobile.png';
export const Aside = styled.aside`
    grid-area: aside;
    background: url(${bgDesktop});
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    gap:3rem;

    position:relative;

    
    @media screen and (max-width: 900px){
        background: url(${bgMobile});
        background-repeat: no-repeat;
        background-size: cover;

    }
    
`