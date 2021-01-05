import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';
import { fetchSearch } from '../actions/gameAction';

const Nav = () => {
  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState('');

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearchHandler = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput('');
  };

  const clearSearchHandler = () => {
    dispatch({ type: 'CLEAR_SEARCH' });
  };

  return (
    <StyledNav>
      <Logo onClick={clearSearchHandler}>
        <img src={logo} alt='logo' />
        <h1>Ignite</h1>
      </Logo>
      <form className='search'>
        <input value={textInput} onChange={inputHandler} type='text' />
        <button type='submit' onClick={submitSearchHandler}>
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%auto;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    border-radius: 20px;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    background: #ada9a9;
    color: #222a27;
  }
  input:focus {
    outline: none !important;
  }
  button {
    font-size: 1.5rem;
    border: none;
    border-radius: 20px;
    padding: 0.5rem 2rem;
    background-color: #f2403d;
    color: #c5c6c3;
    cursor: pointer;
  }
  button:focus {
    outline: none !important;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  img {
    width: 3rem;
    height: 3rem;
  }
`;

export default Nav;
