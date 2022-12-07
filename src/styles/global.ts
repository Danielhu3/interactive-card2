import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Space Grotesk', sans-serif;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
    }

    body{
        font-size: 1.2rem;
        font-weight: 500;
    }

    .App{
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-areas: 'aside main';
    }
`