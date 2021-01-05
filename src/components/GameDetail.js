import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Loading from './Loading';

const GameDetail = () => {
  const { game, screenshots, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {isLoading ? (
        <CardShadow>
          <Loading />
        </CardShadow>
      ) : (
        <CardShadow>
          <Detail>
            <Stats>
              <div className='rating'>
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img src={game.background_image} alt='game' />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className='gallery'>
              {screenshots.results.map((screen) => (
                <img src={screen.image} alt='game' key={screen.id} />
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
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

//const Rating = styled(motion.div)``;

export default GameDetail;
