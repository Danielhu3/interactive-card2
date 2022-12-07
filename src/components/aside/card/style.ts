import styled from "styled-components";
import cardFront from '../../../images/bg-card-front.png'
import cardBack from '../../../images/bg-card-back.png'
export const Card = styled.div.attrs((props: {side:string}) => props)`
    width: 40rem;
    height: 20rem;

    background: url(${props => props.side === 'front' ? cardFront : cardBack});
    background-repeat: no-repeat;
    background-size: contain;


    margin: ${props => props.side === 'front' ? '0 -10rem 0 auto' : '0 -17rem 0 auto'};
    

    
`