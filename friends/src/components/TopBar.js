import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TopBarContainerSC = styled.div`
    background: silver;
    margin-top: -10px;
    margin-bottom: 20px;
    padding: 20px;
`

const TopBarSC = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  margin: 10px auto 0;
`

const TopBar = (props) => {
  return (
    <TopBarContainerSC>
      <TopBarSC>
        <Link to="/login">LOGIN</Link>
        <Link to="/protected">FRIENDLIST</Link>
      </TopBarSC>
    </TopBarContainerSC>
  )
}

export default TopBar