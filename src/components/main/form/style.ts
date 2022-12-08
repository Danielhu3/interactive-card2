import styled from "styled-components";
export const Form = styled.form.attrs((props: {isSubmited:boolean}) => props)`

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    gap: ${props => props.isSubmited ? '2rem' : '3.5rem'};

    max-width:34rem;
    margin-left: 15%;

    @media screen and (max-width: 900px){
        margin:0;   
    }

`