import React, { useContext } from 'react';
import { MyContext } from '../../context/MyContext';
import * as S from '../../styles/globalStyles';

export const Container = ({ children }) => {
  const { startOfPageRef } = useContext(MyContext);
  return (
    <>
      <div ref={startOfPageRef} />
      <S.StyledContainer >
        {children}
      </S.StyledContainer>
    </>
  );
};
