import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    color: ${props => props.fColor};
    background-color: ${props => props.bgColor};
    font-size: ${props => props.fSize || '16px'};
    border: none;
    text-transform: uppercase ;
    border-bottom: 2px solid ${props => props.theme.primaryColors.softBlue};
    height: 40px;

    font-weight:600;
    cursor: pointer;
`
export const Buttom = ( {bgColor, fColor, buttonName='customName', fSize} ) => {
    return (
        <>
            <StyledButton bgColor={bgColor} fColor={fColor} fSize={fSize}>
                {buttonName}
            </StyledButton>
        </>
    )
}
