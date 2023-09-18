import styled from "styled-components";

export const ContainerHeader = styled.nav`
width: 100%;
background-color: #000;
display: flex;
align-items: center;
justify-content: center;

svg {
color: #fff;
margin-bottom: -0.5rem;

}

img {
width: 22px;
margin-bottom: -0.5rem;
margin-right: 1.375rem;


}
ul {
list-style: none;
text-align: center;
height: 218.75rem;
}

ul li {
display: inline-block;
position: relative;
font-size: 0.813rem;


}
ul li a {
display: block;
padding: 1.25rem 0.75rem;
color: rgba(255, 255, 255, .8);
text-decoration: none;
text-align: center;

}

ul li ul.dropdown li {
display: block;
background: #3333;
margin: 0.125rem 0px;
border-radius: 0.125rem;
font-weight: 500;
font-size: 1.125rem;

}

ul li ul.dropdown {
width:auto;

position: absolute;
z-index: 999;
display: none;
}
ul li a:hover {

opacity: 0.64;
}
ul li:hover ul.dropdown{
display: block;


} 

`
export const LogosHeader = styled.div`
display: flex;

`