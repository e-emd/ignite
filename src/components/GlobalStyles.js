// F34C48 = red
//import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        scroll-behavior: smooth;
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgray;
        }
    }
    body{
        font-family: 'Nunito Sans' , sans-serif;
        width: 100%;
        background:#161718;
        color: #C5C6C3;
    }
    h2{
        font-size: 3rem;
        color:#49CD9C;
    }
    h3{
        font-size: 1.5rem;
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1.3rem;
        line-height: 200%;
        color: #8adbbd;
    }
    a{
        text-decoration: none;
        color: #a1ccbc
    }
    img{
        display: block;
    }
    input{
        font-family: 'Nunito Sans' , sans-serif;
    }
    `;

export default GlobalStyles;
