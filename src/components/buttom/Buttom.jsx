import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${props => props.bgColor};
    font-size: ${props => props.fSize || '16px'};
    border: none;
    text-transform: uppercase ;
    border-bottom: 2px solid ${props => props.theme.primaryColors.softBlue};
    height: 40px;
    font-weight:600;
    cursor: pointer;
`
export const Buttom = ({ bgColor, fColor, buttonName='customName', fSize, onClick=()=>{},Icon }) => {
    return (
        <>
            <StyledButton bgColor={bgColor} fColor={fColor} fSize={fSize} onClick={onClick}>
                {buttonName}
                {Icon? <Icon /> : null}
            </StyledButton>
        </>
    )
}
