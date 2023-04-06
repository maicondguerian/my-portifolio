import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.main`
  background-color: ${props => props.theme.primaryColors.midDark};
  height: max-content;
  padding: 2rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const Container = (props) => {
  return React.createElement(
    StyledContainer,
    null,
    props.children
  );
};
