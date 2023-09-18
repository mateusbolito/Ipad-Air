import styled from "styled-components";

export const SpecificationsContainer = styled.div`
position:  relative;
margin: 0 auto;
max-width: 100%;  

a {
color: #fff;
display: flex;
align-items: flex-start;
font-size: 1.313rem;
line-height: 1.14286;
font-weight: 600;
letter-spacing: .011em;
position: sticky;
top: 0;
}
`
export const MenuTray = styled.div`
width: 100%;
height: 2.5rem;
display: flex;
margin-top: -1.375rem;
justify-content: flex-end;
position: sticky;
top: 0;
z-index: 100;
ul {

}
li {
margin-left: 1.5rem;

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
margin-left: 1.5rem;


button {
cursor: pointer;
display: inline-block;
text-align: center;
white-space: nowrap;
background: #0071e3;
color: #fff;
border-radius: 56.25rem;
font-size: 0.75rem;
line-height: 1.33337;
font-weight: 400;
letter-spacing: -.01em;
font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
border-style: solid;
border-width: 0.063rem;
min-width: 1.563rem;
padding-left: 0.625rem;
padding-right: 0.625rem;
padding-top: 0.188rem;
padding-bottom: 0.188rem;

}

button:hover {
opacity: 0.68;
}
}

`