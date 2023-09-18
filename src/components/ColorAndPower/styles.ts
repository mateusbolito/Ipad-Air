import styled from "styled-components";

export const ImageContainer = styled.div`
width: 100%;


> div {
width: 100%;

img {
width: 58.5rem;
height: 22.938rem;
background-size: 58.5rem 22.938rem;
margin-top: 10.313rem;
max-width: 100%;
background-position: 50%;
}

}

`
export const TitleSection = styled.div`
width: 100%;

p { 
margin-top: 8.75rem ;
font-size: 5.625rem;
background: #fff;
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
-webkit-box-decoration-break: clone;
box-decoration-break: clone;
background-image: linear-gradient(129deg,#dc79ff,#256bfa);
line-height: 1.0416666667;
font-weight: 500;
letter-spacing: -0.015em;
}
`

export const TitlesApresentation = styled.div`
width: 100%;


p{

padding-top: 4.688rem;
color: #fff;
font-size: 4.5rem;
line-height: 1.05556;
font-weight: 500;
letter-spacing: -0.012em;
 
}

.name {
max-width: 50rem;
margin: 0 auto;
}
.cores {
background-image: linear-gradient(90deg,#ffc170,#ec787f,#8980ed);
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
-webkit-box-decoration-break: clone;
box-decoration-break: clone;
font-weight: 500;
}
`
export const LinksOfView = styled.div`
width: 100%;
height: 1.875rem;
padding-top: 5.813rem;


li {
display: inline;
margin: 0 0.8em;
  
}
span {
color: #2997ff;
font-size: 1.5rem;
line-height: 1.1666666667;
font-weight: 500;
letter-spacing: .009em;
}
svg{
padding-left: 0.3rem;
color: #2997ff;
}
h1{
color: #fff;
}


`
export const PictureIpad = styled.div`
width: 63.75rem;
height: 65.313rem;
margin-top: 3.75rem;
animation: float 5s ease-in-out infinite;
background-image: url("https://www.apple.com/v/ipad-air/t/images/overview/features/iris__fnhnshkpwl6y_large.jpg");

@keyframes float {
0% {
 transform: translateY(0px);
} 50% {
transform: translateY(60px);
} 100% {
transform: translateY(0px);
}
  
}
` 
