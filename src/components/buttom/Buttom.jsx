import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    color: ${props => props.fColor};
    background-color: ${props => props.bgColor};
    border: none;
    border-bottom: 2px solid ${props => props.theme.primaryColors.softBlue};
`
export const Buttom = ( {bgColor, fColor, buttonName='customName'} ) => {
    return (
        <>
            <StyledButton bgColor={bgColor} fColor={fColor}>
                {buttonName}
            </StyledButton>
        </>
    )
}
