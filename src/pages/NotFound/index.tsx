import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/notfound.json';
import { Container } from './styles';

const NotFound: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <Lottie options={defaultOptions} isClickToPauseDisabled />
    </Container>
  );
};

export default NotFound;
