import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { Buttom } from "../buttom/Buttom";
import pjt1 from "../../assets/Screenshot_3.png";
import pjt2 from "../../assets/Screenshot_7.png";
import pjt3 from "../../assets/Screenshot_8.png";
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
    margin-bottom: 0.5rem;
    position: relative;
    overflow: hidden;
    display: block;

    img {
      width: 100%;
      height: 100%;
     
    }
  }
`;

const InfosWrapper = styled.span`
  display: flex;
  flex-direction: column;

    span {
    font-size: 25px;
  }
`;

const List = ({ mock }) => {
  const [modal, setModal] = useState(false);
  return (
    <InfosWrapper key={mock.id}>
      <ul>
        <li
          onMouseEnter={()=> setModal(true)}
          onMouseLeave={() => setModal(false)}
        >
          {mock.img}
          <Modal isOpen={modal} />
        </li>
      </ul>
      <span>{mock.proj}</span>
      <p> {mock.exp} </p>
    </InfosWrapper>
  )
}

export const Projects = () => {

  const projectsList = [
    { proj: "dev-finder-github-api", exp: "React fetchAPI react-icons", img: <img src={pjt1} alt="dev-finderGitHubAPI" />, id: 1 },
    { proj: "roll-adive-advisor", exp: "React fetchAPI react-icons sass", img: <img src={pjt2} alt="roll-adive-advisor"/>, id: 2  },
    { proj: "interactive-rating-component", exp: "React sass Semantic html5 markup", img: <img src={pjt3} alt="roll-adive-advisor" />, id: 3},
    { proj: "React", exp: "exp",  id: 4 },
    { proj: "Next-js", exp: "exp",  id: 5 },
    { proj: "Jquery", exp: "exp", id: 6 },
  ];

  const SetThumbnail = (e) => {
    // const { isOpen, handleShowModal, setIsOpen } = useContext(MyContext);
    return projectsList.map((mock) => (
      <List mock={mock}/>
    ));
  };

  return (
    <>
      <StyledContainer>
        <span>
          <AllTitlesStyle />
        </span>
        <Buttom bgColor={"transparent"} />
      </StyledContainer>
      <StyledProjectThumb>
        <SetThumbnail />
      </StyledProjectThumb>
    </>
  );
};
