import { useContext, useState } from "react";
import styled from "styled-components";
import pjt1 from "../../assets/Screenshot_3.png";
import pjt2 from "../../assets/Screenshot_7.png";
import pjt3 from "../../assets/Screenshot_8.png";
import pjt4 from "../../assets/Screenshot_9.png";
import { Modal } from "../modal/Modal";
import { AllTitlesStyle } from "../allTittleStyle/AllTittleStyle";
import { MyContext } from "../../context/MyContext";

const StyledContainer = styled.div`
  position: relative;

  /* button{
    position: absolute;
    right: 0;
    bottom: 0;
    margin-bottom: 1px;
  } */

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
    border-bottom: solid 1px;

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
    <InfosWrapper>
      <ul>
        <li
          onMouseEnter={() => setModal(true)}
          onMouseLeave={() => setModal(false)}
        >
          {mock.img}
          <Modal isOpen={modal} >
            <a href={mock.url} target="_blank" rel="noopener noreferrer">open</a>
          </Modal>
        </li>
      </ul>
      <span>{mock.proj}</span>
      <p> {mock.exp} </p>
    </InfosWrapper>
  );
};

export const Projects = () => {
  const { projectsSectionRef } = useContext(MyContext);
  const projectsList = [
    {
      proj: "dev-finder-github-api",
      exp: "React fetchAPI react-icons",
      img: <img src={pjt1} alt="dev-finderGitHubAPI" />,
      id: 1,
      url:'https://maicondguerian.github.io/dev-finderGitHubAPI/'
    },
    {
      proj: "roll-adive-advisor",
      exp: "React fetchAPI react-icons sass",
      img: <img src={pjt2} alt="roll-adive-advisor" />,
      id: 2,
      url:'https://maicondguerian.github.io/roll-dice-advisor-api/'

    },
    {
      proj: "interactive-rating-component/",
      exp: "exp",
      img: <img src={pjt3} alt="roll-adive-advisor" />,
      id: 5,
      url:'https://front-end-mentor-challenge-next-js.vercel.app/'
    },
    {
      proj: "sign-up-with-success-message-NEXTI.JS",
      exp: "React sass Semantic html5 markup",
      img: <img src={pjt4} alt="roll-adive-advisor" />,
      id: 3,
      url: 'https://front-end-mentor-challenge-next-js.vercel.app/'
      
    },
    { proj: "--", exp: "exp", id: 5 },
    { proj: "--", exp: "exp", id: 6 },
  ];

  const SetThumbnail = () => {
    return projectsList.map((mock) => <List mock={mock} key={mock.id} />);
  };

  return (
    <>
      <span ref={projectsSectionRef} />
      <span />
      <StyledContainer>
        <span>
          <AllTitlesStyle customName="Projects" />
        </span>
      </StyledContainer>
      <StyledProjectThumb>
        <SetThumbnail />
      </StyledProjectThumb>
    </>
  );
};
