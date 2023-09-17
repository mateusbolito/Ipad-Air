import { createGlobalStyle } from "styled-components";

 export const GlobalStyle = createGlobalStyle`
 *{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
outline: none;
font-family: 'Poppins', sans-serif;
text-decoration: none;
list-style: none;
scroll-behavior: smooth; 

 } 

 ::-webkit-scrollbar {
width: 6px;
}
::-webkit-scrollbar-thumb {
border-radius: 5px;
}
 body {
 background-color: #fff;
 -webkit-font-smoothing: antialiased;


 } 


 button {
cursor: pointer;
 }
 a {
text-decoration: none;
 }

 `; 
 