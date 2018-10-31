import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const MenuWrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const MenuItem = styled.li`
  font-size: 18px;
  font-weight: 500;
  > a {
    display: block;
    padding: 10px;
    font-family: sans-serif;
    text-decoration: none;
    color: #fff;
    text-shadow: 1px 1px 10px #000;
  }
`

const Menu = () => (
  <nav>
    <MenuWrapper>
      <MenuItem>
        <Link to="/">Home</Link>
      </MenuItem>
      <MenuItem>
        <Link to="/about">About</Link>
      </MenuItem>
    </MenuWrapper>
  </nav>
)

export default Menu
