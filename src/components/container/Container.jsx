import React, { useContext } from 'react';
import styled from 'styled-components';
import { MyContext } from '../../context/MyContext';

const StyledContainer = styled.main`
  background-color: ${props => props.theme.primaryColors.midDark};
  padding: 1rem 10rem 0 ;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const Container = ({ children }) => {
  const { startOfPageRef } = useContext(MyContext)
  return (
    <>
      <div ref={startOfPageRef} />
      <StyledContainer >
        {children}
      </StyledContainer>
    </>
  )
};
