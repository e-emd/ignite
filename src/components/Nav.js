import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt='logo' />
        <h1>Ignite</h1>
      </Logo>
      <div className='search'>
        <input type='text' />
        <button>Search</button>
      </div>
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
    width: 2rem;
    height: 2rem;
  }
`;

export default Nav;
