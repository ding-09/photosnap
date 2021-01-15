import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RectangleButton from '../styles/RectangleButton';

const MobileMenu = () => {
  return (
    <MenuBG>
      <Menu>
        <div className="menu-container">
          <nav>
            <ul>
              <li>
                <Link to="/stories">STORIES</Link>
              </li>
              <li>
                <Link to="/stories">FEATURES</Link>
              </li>
              <li>
                <Link to="/stories">PRICING</Link>
              </li>
            </ul>
          </nav>
          <RectangleButton black>GET AN INVITE</RectangleButton>
        </div>
      </Menu>
    </MenuBG>
  );
};

const MenuBG = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 7.2rem;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Menu = styled.section`
  background: #ffffff;
  height: auto;
  .menu-container {
    padding-top: 3.2rem;
    padding-bottom: 2rem;
    min-width: 35rem;
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    nav {
      border-bottom: 1px solid rgba(0, 0, 0, 0.25);
      margin-bottom: 2rem;
      ul li {
        padding-bottom: 2rem;
        a {
          font-size: 1.5rem;
          line-height: 1.9rem;
          letter-spacing: 2.5px;
        }
      }
    }
  }
  button {
    background: #000000;
    font-size: 1.4rem;
    line-height: 1.9rem;
    letter-spacing: 2.5px;
  }
`;

export default MobileMenu;
