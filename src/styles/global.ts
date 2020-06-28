import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
 }

 body{
   -webkit-font-smoothing: antialiased;
   font-family: 'Roboto Slab', serif;
   font-size: 16px;
   background: linear-gradient(#22202c, #402845);
 }

`;
