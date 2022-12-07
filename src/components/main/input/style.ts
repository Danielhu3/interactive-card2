import styled from "styled-components";
export const Input = styled.input.attrs((props: {placeholder: string, error:string}) => props)`
    display: block;
    width: 100%;
    padding: 1rem 2rem 1rem;

    border-radius: 0.8rem;
    border: solid 1px ${props => props.error ? 'red': 'hsl(270, 3%, 87%)'};
    margin-top: 0.5rem;
    outline: none;

    color: hsl(278, 68%, 11%);
    font-weight: 700;

   
    
    &::placeholder{
        content: ${props => props.placeholder};
    }

    &:focus{
        border: double 1px transparent;
        background-image: linear-gradient(white, white), 
                    linear-gradient(to right, hsl(249, 99%, 64%), hsl(278, 94%, 30%));
        background-origin: border-box;
        background-clip: padding-box, border-box;
    
        

    }
`