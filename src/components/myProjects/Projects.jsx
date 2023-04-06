import { useContext } from "react";
import styled from "styled-components";
import { Buttom } from "../buttom/Buttom";
import pjt1 from "../../assets/Screenshot_3.png";
import { MyContext } from "../../context/MyContext";
import { Modal } from "../modal/Modal";
import { AllTitlesStyle } from "../contact/Contact";

const StyledContainer = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  position: relative;

  button{
    position: absolute;
    right: 0;
    bottom: 0;
    margin-bottom: 1px;
  }

  span {
    display: flex;
    align-items: center;

    h1 {
      text-transform: uppercase;
      font-style: italic;
      font-size: 50px;
      font-weight: 900;
      border-bottom: 2px solid ${(props) => props.theme.primaryColors.softBlue};
      margin-right: 0.6rem;
    }
  }
`;

const StyledProjectThumb = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 3rem;
  color: #000;

  li {
    background-color: ${(props) => props.theme.primaryColors.softGray};
    height: 400px;
    max-height: 400px;
    margin-bottom: 0.5rem;
    position: relative;

    P,
    span {
      color: #000;
    }

    img {
      width: 100%;
      height: 400px;
    }
  }
`;
const InfosWrapper = styled.span`
  display: flex;
  flex-direction: column;
`;

export const Projects = () => {
  const projectsList = [
    { proj: "github", exp: "exp", img: <img src={pjt1} alt="" /> },
    { proj: "css", exp: "exp" },
    { proj: "Javascript", exp: "exp" },
    { proj: "React", exp: "exp" },
    { proj: "Next-js", exp: "exp" },
    { proj: "Jquery", exp: "exp" },
  ];

  const SetThumbnail = () => {
    const { isOpen, handleShowModal, setIsOpen } = useContext(MyContext);
    return projectsList.map((mock, index) => (
      <InfosWrapper key={index}>
        <li
          onMouseEnter={handleShowModal}
          onMouseLeave={() => setIsOpen(false)}
        >
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
        <span>
          <AllTitlesStyle customName="projects" />
        </span>
        <Buttom bgColor={"transparent"} />
      </StyledContainer>
      <StyledProjectThumb>
        <SetThumbnail />
      </StyledProjectThumb>
    </>
  );
};
