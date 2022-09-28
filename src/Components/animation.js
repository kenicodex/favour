import styled from "styled-components";

export const Animate = styled.span`

height: 30px;
overflow: hidden;
display: inline-block;


animation: reveal 4s steps(30);



@keyframes reveal {
    0% { width: 0px;}
    25% { width: 20rem;}
    50% { width: 30rem;}
    75% { width: 40rem;}
    100% {width: .  a;}
  }
`