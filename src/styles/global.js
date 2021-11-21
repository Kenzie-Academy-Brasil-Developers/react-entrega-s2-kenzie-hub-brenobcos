import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
       *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --color-primary: #403CAA;
        --color-secondary: #11995E;
        --white-color: #FFFFFF;
        --black-color: #000000;
        --grey-100: #333333;
        --grey-50: #999999;
        --grey-0: #F5F5F5;

        --green-transp:#11995E;
        --purple-transp: #EDEDFE;
    }

    body{
        font-family: 'Inter', sans-serif;
        font-size: 14px;
    }

    h1{
        font-size: 32px;
    }

    h2{
        font-size: 28px;
    }

    h3{
        font-size: 22px;
    }

    h4{
        font-size: 18px;
    }

    caption{
        font-size: 12px;
    }

`;
