import { AllTitlesStyle } from '../allTittleStyle/AllTittleStyle';
import { MyContext } from '../../context/MyContext';
import { useContext } from 'react';
import * as S from '../../styles/globalStyles';

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
        { skill: "Git", exp: "1 years experience" },
        { skill: "M-UI", exp: "4 months experience" },
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
        <S.StyledContainerSkills>
            <span><AllTitlesStyle customName='Skills'/></span> 
            <S.StyledUl>
                <RenderSkills />
            </S.StyledUl>
        </S.StyledContainerSkills>
        </>
    );
};
