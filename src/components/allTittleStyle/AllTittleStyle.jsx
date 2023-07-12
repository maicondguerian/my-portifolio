import styled from "styled-components"

const StyledTitle = styled.h1`
        text-transform:uppercase;
        font-size: 50px;
        font-weight: 900;
        border-bottom: 2px solid ${props => props.theme.primaryColors.softBlue};
        font-style: italic;
    `
export const AllTitlesStyle = ({ customName = 'customName' }) => {
    return <StyledTitle>{customName}</StyledTitle>
}
