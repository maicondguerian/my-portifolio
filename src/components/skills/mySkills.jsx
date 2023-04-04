import React from 'react'
import styled from 'styled-components'
import { Buttom } from '../buttom/Buttom';



const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    justify-content:space-between;
    /* h1{
        font-size: 70px;
        font-weight: 400;
        border-bottom: 2px solid ${props => props.theme.primaryColors.softBlue};
        width: 170px;
        font-style: italic;
    } */
`
const StyledUl = styled.ul`
    list-style:none;
    display: grid;
    justify-content:space-between;
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
        { skill: "html", exp: "exp" },
        { skill: "css", exp: "exp" },
        { skill: "Javascript", exp: "exp" },
        { skill: "React", exp: "exp" },
        { skill: "Next-js", exp: "exp" },
        { skill: "Jquery", exp: "exp"},
        { skill: "Styled-components", exp: "exp" },
        { skill: "Sass", exp: "exp" }
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
        <StyledContainer>
            {/* <h1> Skills</h1> */}
            <StyledUl>
                <RenderSkills />
            </StyledUl>
        </StyledContainer>
    );
};
