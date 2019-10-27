import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import logo from '../logo.png';

class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar">
        <div className="brand">
          <img src={logo} alt="logo" />
          <h1 className="navbar__title">線上唱片行</h1>
        </div>

        <ul className="navbar__list">
          <li>
            <Link to="/">瀏覽唱片</Link>
          </li>
          <li>
            <Link to="/cart">
              購物籃
              <i className="fas fa-cart-plus" />
            </Link>
          </li>
        </ul>
      </NavWrapper>
    );
  }
}

export default Navbar;

const NavWrapper = styled.nav`
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #272727;
  color: #ccc;
  height: 4rem;

  .brand {
    display: flex;
    align-items: center;

    img {
      height: 4rem;
      width: auto;
      margin: 0 1rem 0 -2rem;
    }
  }

  .navbar__list {
    display: flex;

    li {
      margin-left: 1.5rem;
      a {
        color: #ccc;
        text-decoration: none;

        &:hover {
          border-bottom: 2px solid #ccc;
        }
      }
    }
  }
`;
