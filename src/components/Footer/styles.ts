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
width: 27.313rem;
height: 10.125rem;
font-size: 1.188rem;
line-height: 1.4211026316;
font-weight: 400;
letter-spacing: .012em;

}

p {
margin-top:0.625rem;
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
margin: 1.875rem;

}
`
export const ImageHeader = styled.div`
width: 28.563rem;

img {
padding-right: 0.625rem;
}

h2 {
font-size: 2.813rem;
background-image: linear-gradient(90deg,#ffc170,#ec787f,#8980ed);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
-webkit-box-decoration-break: clone;
box-decoration-break: clone;
}

`
