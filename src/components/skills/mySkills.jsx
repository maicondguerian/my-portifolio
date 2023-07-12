
import styled from 'styled-components'
import { AllTitlesStyle } from '../allTittleStyle/AllTittleStyle';
import { MyContext } from '../../context/MyContext';
import { useContext } from 'react';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
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
    grid-row-gap: 4rem;
   margin-bottom: 200px;
    
    
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
    const { skillSectionRef } = useContext(MyContext);
    const listSkills = [
        { skill: "html", exp: "1 years experience" },
        { skill: "CSS/Sass", exp: "1 years experience" },
        { skill: "Javascript", exp: "1 years experience" },
        { skill: "ReactJS", exp: "1 years experience" },
        { skill: "Typescrit", exp: "1 month experience" },
        { skill: "NextJS", exp: "2 months experience" },
        { skill: "Jquery", exp: "7 months experience"},
        { skill: "Styled-components", exp: "7 months experience" },
        { skill: "Git", exp: "1 years experience" }
    ];

    const RenderSkills = () => {
        return listSkills.map((skill, index) => (
            <li key={index}>
                <span>{skill.skill}</span>
                <p> {skill.exp} </p>
            </li>
        ))
    };

    return (
        <>
        <span ref={skillSectionRef}/>
        <span />
        <StyledContainer>
            <span> <AllTitlesStyle customName='Skills'/> </span> 
            <StyledUl>
                <RenderSkills />
            </StyledUl>
        </StyledContainer>
        </>
    );
};
