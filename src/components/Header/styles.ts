import styled from "styled-components";

export const ContainerHeader = styled.nav`
width: 100%;
background-color: #000;
display: flex;
align-items: center;
justify-content: center;



svg {
color: #fff;
margin-bottom: -8px;

}

img {
width: 22px;
margin-bottom: -8px;
margin-right: 20px;


}
ul {
list-style: none;


text-align: center;
height: 3500px;
}
ul li {
display: inline-block;
position: relative;
font-size: 13px;


}
ul li a {
display: block;
padding: 20px 12px;
color: rgba(255, 255, 255, .8);;
text-decoration: none;
text-align: center;


}
ul li ul.dropdown li {
display: block;
background: #3333;
margin: 2px 0px;
border-radius: 2px;
font-weight: 500;
font-size: 18px;

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