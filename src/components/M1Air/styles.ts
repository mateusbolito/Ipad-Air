import styled from "styled-components";

export const M1Container = styled.div`
width: 100%;
height: 12.5rem;
align-items: center;
justify-content: center;

p{
margin: 0 auto;
width: 61.25rem;
color: #000;
padding-top: 4.375rem;
font-size: 6rem;
line-height: 1.0416666667;
font-weight: 500;
letter-spacing: -0.015em;
font-family: 'SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif';
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
padding-top: 2.5rem;

img {
border-radius: 0.5rem;
}
`
export const SectionContent = styled.div`
width: 100%;
display: inline-block;


p {
display: inline-block;
width: 25rem;
margin-left: 18.75rem;
font-size: 1.75rem;
line-height: 1.2858342857; font-weight: 500;


}

> div {
margin-left: -19.375rem;
display: flex;
align-items: center;
justify-content: center;
img {
width: 81.25rem;
display: flex;
align-items: flex-start;
justify-content: flex-start;

}

}

`
