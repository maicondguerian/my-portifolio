import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    ul{
        list-style:none;
        display: grid;
        justify-content:space-between;
        grid-template-columns: repeat(3, 1fr); 
        grid-template-rows: 5rem; 
        grid-column-gap: 10rem;
        
    }
`
export const MySkills = () => {
  return (
    <StyledContainer>
        <ul>
            <li>
                <span> teste</span>
                <p> teste boy</p>
            </li>
            <li>teste boy</li>
            <li>teste boy</li>
            <li>teste boy</li>
            <li>teste boy</li>
            <li>teste boy</li>
        </ul>
    </StyledContainer>
  )
}
