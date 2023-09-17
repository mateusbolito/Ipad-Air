import styled from "styled-components";

export const SpecificationsContainer = styled.div`
position:  relative;
margin: 0 auto;
max-width: 100%;  

a{
color: #fff;
display: flex;
align-items: flex-start;
font-size: 21px;
line-height: 1.14286;
font-weight: 600;
letter-spacing: .011em;
position: sticky;
top: 0;
}
`
export const MenuTray = styled.div`
width: 100%;
height: 40px;
display: flex;
margin-top: -22px;
justify-content: flex-end;
position: sticky;
top: 0;
z-index: 100;
ul {

}
li {
margin-left: 24px;

.white {
color: #fff;
}

span {
color: #fff;
opacity: .64 #fff ;

}
span:hover {
color:#06c;
}
}

> div {
margin-left: 24px;


button {
cursor: pointer;
display: inline-block;
text-align: center;
white-space: nowrap;
background: #0071e3;
color: #fff;
border-radius: 980px;
font-size: 12px;
line-height: 1.33337;
font-weight: 400;
letter-spacing: -.01em;
font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
border-style: solid;
border-width: 1px;
min-width: 25px;
padding-left: 10px;
padding-right: 10px;
padding-top: 3px;
padding-bottom: 3px;

}

button:hover {
opacity: 0.68;
}
}

`