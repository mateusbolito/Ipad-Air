import styled from "styled-components";

export const ContainerFooter = styled.div`
width: 100%;

display: flex;
align-items: center;
justify-content: center;

> div {
    

display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
justify-content: center;

}
`


export const ParagraphContainer = styled.div`
flex-direction: column;

p {
width: 437px;
height: 162px;
font-size: 19px;
line-height: 1.4211026316;
font-weight: 400;
letter-spacing: .012em;


}

p {
margin-top: 10px
}

a {
color: #06c;

}
a:hover {
opacity: 0.64;
}
`
export const  ContainerAll = styled.div`
margin: 0 auto;



> div {
margin: 30px;


}
`
export const ImageHeader = styled.div`
width: 457px;

img {
padding-right: 10px;
}

h2 {
font-size: 45px;
background-image: linear-gradient(90deg,#ffc170,#ec787f,#8980ed);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
-webkit-box-decoration-break: clone;
box-decoration-break: clone;
}

`
