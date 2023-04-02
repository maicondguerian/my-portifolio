import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.main`
    background-color: ${props => props.theme.primaryColors.midDark};
    height: 100vh;
    width: 100vw;
`;

export const Container = (props) => {
  return React.createElement(
    StyledContainer,
    null,
    props.children
  );
};
