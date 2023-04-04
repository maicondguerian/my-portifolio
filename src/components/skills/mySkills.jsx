import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    
    
`
const StyledUl = styled.ul`
    list-style:none;
    display: grid;
    justify-content:space-between;
    grid-template-columns: repeat(3, 1fr); 
    grid-column-gap: 10rem;
    grid-row-gap: 4rem;

    li{
        span{
            font-size: 40px;
        } 

        
    }

    li:nth-child(1) span,
    li:nth-child(2) span {
        text-transform: uppercase;
    }
`

export const MySkills = () => {
    const listSkills = [
        { skill: "html ", exp: "Descrição da habilidade 2" },
        { skill: "css ", exp: "Descrição da habilidade 3" },
        { skill: "Javascript ", exp: "Descrição da habilidade 1" },
        { skill: "React ", exp: "Descrição da habilidade 4" },
        { skill: "Next-js ", exp: "Descrição da habilidade 4" },
        { skill: "Jquery", exp: "Descrição da habilidade 4" },
        { skill: "Styled-components", exp: "Descrição da habilidade 5" },
        { skill: "Sass", exp: "Descrição da habilidade 6" },
    ];

    const renderSkills = () => {
        return listSkills.map((skill, index) => (
            <li key={index}>
                <span>{skill.skill}</span>
                <p> {skill.exp} </p>
            </li>
        ))
    };
    return (
        <StyledContainer>
            <StyledUl>
                {renderSkills()}
            </StyledUl>
        </StyledContainer>
    );
};

