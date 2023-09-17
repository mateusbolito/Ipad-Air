import styled from "styled-components";

export const M1Container = styled.div`
width: 100%;
height: 200px;

align-items: center;
justify-content: center;

p{
margin: 0 auto;
width: 980px;
color: #000;
padding-top: 70px;
font-size: 96px;
line-height: 1.0416666667;
font-weight: 500;
letter-spacing: -0.015em;
font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
}

strong {
background-image: linear-gradient(129deg,#dc79ff,#256bfa);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
-webkit-box-decoration-break: clone;
box-decoration-break: clone;
font-weight: 500;
}
`
export const ImageM1 = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 40px;

img {
border-radius: 8px;
}
`
export const SectionContent = styled.div`
width: 100%;
display: inline-block;


p {
display: inline-block;
width: 400px;
margin-left: 300px;
font-size: 28px;
line-height: 1.2858342857; font-weight: 500;


}

> div {
margin-left: -310px;
display: flex;
align-items: center;
justify-content: center;
img {
width: 1300px;
display: flex;
align-items: flex-start;
justify-content: flex-start;

}

}

`
