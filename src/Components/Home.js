import { IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { StyleHeaderContainer, StyleHeaderLeft, StyleHeaderRight, StyleHeaderWrapper } from './Home.styled'

function Home() {
  return (
    <div>Home
        <StyleHeaderContainer>
        <StyleHeaderWrapper>
          <StyleHeaderLeft>
          <Link to="/about">About</Link>
            <Link to="/store">Store</Link>
          </StyleHeaderLeft>
          <StyleHeaderRight>
            <Link to="/gmail">Gmail</Link>
            <Link to="/images">Images</Link>
            <Tooltip>
                <IconButton>
                    
                </IconButton>
            </Tooltip>
          </StyleHeaderRight>
        </StyleHeaderWrapper>
        </StyleHeaderContainer>
    </div>
  )
}

export default Home