import styled from "styled-components";
import bgDesktop from '../../images/bg-main-desktop.png';
export const Aside = styled.aside`
    grid-area: aside;
    background: url(${bgDesktop});
    background-repeat: no-repeat;;

    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    gap:3rem;

    position:relative;

    
`