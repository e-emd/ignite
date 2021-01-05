import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <LoaderDiv>
      <Loader />
    </LoaderDiv>
  );
};

const LoaderDiv = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
`;

const Loader = styled.div`
  &:before,
  &:after {
    content: '';
    width: 40px;
    height: 40px;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: calc(50% - 10px);
    background-color: #f2403d;
    animation: movement 1s ease-in-out infinite;
  }
  &:after {
    bottom: 0;
    animation-delay: 0.5s;
  }
  @keyframes movement {
    0%,
    100% {
      -webkit-transform: translate(0, 0) rotate(0);
    }
    25% {
      -webkit-transform: translate(80px, 80px) rotate(45deg);
    }
    50% {
      -webkit-transform: translate(0, 140px) rotate(0deg);
    }
    75% {
      -webkit-transform: translate(-80px, 80px) rotate(45deg);
    }
  }
`;

export default Loading;
