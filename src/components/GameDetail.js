import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Loading from './Loading';
import { smallImage } from '../util';
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import xbox from '../img/xbox.svg';
import gamepad from '../img/gamepad.svg';
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetail = ({ pathId }) => {
  const history = useHistory();

  const { game, screenshots, isLoading } = useSelector((state) => state.detail);

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  };

  const getPlatform = (platform) => {
    switch (platform) {
      case 'PlayStation 5':
        return playstation;
      case 'Xbox Series S/X':
        return xbox;
      case 'PC':
        return steam;
      case 'iOS':
        return apple;
      case 'nintendo switch':
        return nintendo;
      default:
        return gamepad;
    }
  };

  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt='star-rating' key={i} src={starFull} />);
      } else {
        stars.push(<img alt='star-rating' key={i} src={starEmpty} />);
      }
    }
    return stars;
  };

  return (
    <>
      {isLoading ? (
        <CardShadow>
          <Loading />
        </CardShadow>
      ) : (
        <CardShadow
          layoutId={pathId}
          className='shadow'
          onClick={exitDetailHandler}
        >
          <Detail>
            <Stats>
              <div className='rating'>
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating:{getStars()}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      alt={data.platform.name}
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt='game'
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className='gallery'>
              {screenshots.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  alt='game'
                  key={screen.id}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar-thumb {
    background-color: #f2403d;
  }
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    overflow-x: auto;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: #242424;
  position: absolute;
  left: 10%;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
