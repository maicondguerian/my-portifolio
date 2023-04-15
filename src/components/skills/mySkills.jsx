import React, { useContext, useRef } from 'react'
import styled from 'styled-components'
import { AllTitlesStyle } from '../contact/Contact';
import { MyContext } from '../../context/MyContext';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content:space-between;


    span{
        display: flex;
    }
`
const StyledUl = styled.ul`
    list-style:none;
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    grid-column-gap: 1rem;
    grid-row-gap: 3rem;
    
    li{
        span{
            font-size: 40px;
            display:flex;
            align-items:center;
        } 
    }

    li:nth-child(1) span,
    li:nth-child(2) span {
        text-transform: uppercase;
    }
`

export const MySkills = () => {
    const listSkills = [
        { skill: "html", exp: "1 years experience" },
        { skill: "css", exp: "1 years experience" },
        { skill: "Javascript", exp: "1 years experience" },
        { skill: "React", exp: "7 months experience" },
        { skill: "Next-js", exp: "2 months experience" },
        { skill: "Jquery", exp: "7 months experience"},
        { skill: "Styled-components", exp: "7 months experience" },
        { skill: "Sass", exp: "7 months experience" },
        { skill: "git", exp: "1 years experience" }
    ];

    const RenderSkills = () => {
        return listSkills.map((skill, index) => (
            <li key={index}>
                <span>{skill.skill} {skill.icon}</span>
                <p> {skill.exp} </p>
            </li>
        ))
    };

    return (
        <>
        <StyledContainer>
            <span> <AllTitlesStyle customName='Skills'/> </span> 
            <StyledUl>
                <RenderSkills />
            </StyledUl>
        </StyledContainer>
        </>
    );
};
