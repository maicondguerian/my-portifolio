import React from 'react'
import styled from 'styled-components'
import { Buttom } from '../buttom/Buttom'

export const Projects = () => {
    const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;

    h1 {
      font-size: 70px;
      font-weight: 400;
      border-bottom: 2px solid ${props => props.theme.primaryColors.softBlue};
    }
    `
  return (
    <StyledContainer>
      <h1>
        Projects
      </h1>
        <Buttom bgColor={'transparent'}/>
    </StyledContainer>
  )
}
