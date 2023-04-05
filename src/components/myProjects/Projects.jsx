import React, { useContext } from 'react'
import styled from 'styled-components'
import { Buttom } from '../buttom/Buttom'
import pjt1 from '../../assets/Screenshot_4.png'
import { MyContext } from '../../context/MyContext'
import { Modal } from '../modal/Modal'

export const Projects = () => {
    const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    position: relative;

    h1 {
      font-size: 70px;
      font-weight: 400;
      border-bottom: 2px solid ${props => props.theme.primaryColors.softBlue};
    }
  `

const StyledProjectThumb = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    color: #000;

    li{
      background-color: ${props => props.theme.primaryColors.softGray};
      height: 400px;
      max-height: 400px;
      margin-bottom: 0.5rem;

      P, span{
        color: #000;
      };

      img{
        width: 100%;
        height: 400px;
      }
    };
`
const InfosWrapper = styled.span`
    display:flex;
    flex-direction: column;
`

  const projectsList = [
    { proj: "github", exp: "exp", img: <img src={pjt1} alt=""/>},
    { proj: "css", exp: "exp" },
    { proj: "Javascript", exp: "exp" },
    { proj: "React", exp: "exp" },
    { proj: "Next-js", exp: "exp" },
    { proj: "Jquery", exp: "exp"},
    { proj: "Styled-components", exp: "exp" },
    { proj: "Sass", exp: "exp" },
];

const SetThumbnail = () => {
  const {isOpen, handleShowModal} = useContext(MyContext);

  return projectsList.map((mock, index) => (
      <InfosWrapper>
        <li key={index} onClick={handleShowModal}>
          {mock.img}
          <Modal isOpen={isOpen} />
        </li>
        <span>{mock.proj}</span>
        <p> {mock.exp} </p>
    </InfosWrapper>
  ));
};
  return (
    <>
      <StyledContainer>
        <h1>Projects</h1>
        <Buttom bgColor={'transparent'}/>
      </StyledContainer>
      <StyledProjectThumb>
        <SetThumbnail />
      </StyledProjectThumb>
    </>
  )
}
