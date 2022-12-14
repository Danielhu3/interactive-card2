import styled from "styled-components";
import cardFront from '../../../images/bg-card-front.png'
import cardBack from '../../../images/bg-card-back.png'
export const Card = styled.div.attrs((props: {side:string}) => props)`
    width: 40rem;
    height: 20rem;

    background: url(${props => props.side === 'front' ? cardFront : cardBack});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 1rem;


    margin: ${props => props.side === 'front' ? '0 -10rem 0 auto' : '0 -17rem 0 auto'};
    

    ${props => props.side === 'front'
    ? `
    display:grid;
    grid-template-rows: 3fr 1.5fr 0.5fr;
    grid-template-areas: 'cardlogo' 'cardnumber' 'info';
    padding: 2rem;
    `
    
    : `
    display:flex;
    align-items:center;
    justify-content:flex-end;
    padding: 5rem;
    `};
    @media screen and (max-width: 900px){
        margin:0;
        position:absolute;
        transform: scale(0.8);

        ${props => props.side === 'front' ? `
        top:12rem;
        left:5%;
        z-index:2;
        `
        :`
        z-index:1;
        `}
    }
    



    
`