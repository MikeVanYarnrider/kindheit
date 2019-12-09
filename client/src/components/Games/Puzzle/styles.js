import styled, { keyframes } from "styled-components";
import $colors from "../../../assets/stylesheet/_variables.scss"



export const GameContainer = styled.div`
  max-width: 750px;
  height: 95vh;
  max-height: 600px;
  width: 100%;
  background: rgba(255, 255, 255, 1);
  ${"" /*  margin: 0 auto; */}
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 20px 0;

  .inner {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(90deg);
  }
  .options {
    align-self: center;
    display: flex;
    justify-content: space-around;
    ${"" /*     height: 15%; */}
    width: 100%;
    padding: 0 10%;
    max-height: 100px;
    @media screen and (max-height: 846px) and (orientation: portrait) {
      max-height: 70px;
      //margin-bottom: 10%;
    }
    //margin-bottom: 3%;
    > img {
      height: 100%;
      border: 2px solid #ffffff;
      padding: 0px;
      background: lightblue;
      cursor: pointer;
      transform: scale(1);
      transform: rotate(90deg);
      transition: 0.1s transform;
      &:hover {
        transform: scale(1.1) rotate(90deg);
      }
    }
  }
`;

const rotate = keyframes`
100% {
  transform: rotate(1turn);
}
`;

let height = 450;

if (window.screen.height <= 640 || window.screen.width <= 412) {
  height = 300;
}

if (window.screen.height <= 480) {
  height = 300;
}
if (window.screen.height <= 412) {
  height = 200;
}

export const WinContainer = styled.div`
  margin: 15px auto;
  width: ${height}px;
  //height:${height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  overflow: hidden;
  padding: 1rem;
  background: lightblue;
  > img {
    width: 100%;
   //height: 100%;
    background: lightblue;
  
  }
  &::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #399953;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#0a6073, #0a6073),
      linear-gradient(#4ba8b0, #4ba8b0), linear-gradient(#095c80, #095c80),
      linear-gradient(#53b9d2, #53b9d2);
    animation: ${rotate} 4s linear infinite;
  }



  &::after {
    content: "";
    position: absolute;
    z-index: -1;

    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: white;
    border-radius: 10px;
  }
`;

export const Content = styled.div`
  grid-area: content;
  position: relative;
  width: 450px;
  height: 490px;
  align-self: center;
  margin: 0 auto;
  > div {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: ${height / 5}px;
    overflow: visible;
    pointer-events: auto;
    transform-origin: 50% 50% 0px;
    border-radius: 5px;
    color: white;
    font-size: 1.6rem;
    background: lightblue;
    border: 2px #fff solid;
    background-image: url(${({ img }) => img});
    background-size: 100%;
    background-repeat: no-repeat;
  }

  > div:nth-child(5) {
    background-position: 0 0;
    box-shadow: 3px 3px 9px rgba(0, 68, 75, 0.6) !important;
  }
  > div:nth-child(2) {
    background-position: 0 25%;
    box-shadow: 3px 3px 9px rgba(0, 68, 75, 0.6) !important;
  }
  > div:nth-child(1) {
    background-position: 0 50%;
    box-shadow: 3px 3px 9px rgba(0, 68, 75, 0.6) !important;
  }
  > div:nth-child(4) {
    background-position: 0 75%;
    box-shadow: 3px 3px 9px rgba(0, 68, 75, 0.6) !important;
  }
  > div:nth-child(3) {
    background-position: 0 100%;
    box-shadow: 3px 3px 9px rgba(0, 68, 75, 0.6) !important;
  }
`;
