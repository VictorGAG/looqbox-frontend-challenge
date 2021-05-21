import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    html, body {

        font-family: 'Roboto', 'Halvetic Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        background-color: #111;
        background-image: url("https://cdn.shopify.com/s/files/1/0012/7611/7054/products/Snorlax_grande.png?v=1542306241");
        background-size: 80px;
        margin: 0;
        padding: 0;
        color: white;
        font-size: 16px;
    }
`;