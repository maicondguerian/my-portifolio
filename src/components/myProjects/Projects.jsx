import { useContext, useState } from "react";
import pjt1 from "../../../public/Screenshot_3.png";
import pjt2 from "../../../public/Screenshot_7.png";
import pjt3 from "../../../public/Screenshot_8.png";
import pjt4 from "../../../public/Screenshot_9.png";
import pjt5 from "../../../public/Screenshot_10.png";
import { Modal } from "../modal/Modal";
import { AllTitlesStyle } from "../allTittleStyle/AllTittleStyle";
import { MyContext } from "../../context/MyContext";
import * as S from "../../styles/globalStyles";

const List = ({ mock }) => {
  const [modal, setModal] = useState(false);
  return (
    <S.InfosWrapper>
      <ul>
        <li
          onMouseEnter={() => setModal(true)}
          onMouseLeave={() => setModal(false)}
        >
          {mock.img}
          <Modal isOpen={modal}>
            <a href={mock.url} target="_blank" rel="noopener noreferrer">
              open
            </a>
          </Modal>
        </li>
      </ul>
      <span>{mock.proj}</span>
      <p> {mock.exp} </p>
    </S.InfosWrapper>
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
      url: "https://maicondguerian.github.io/dev-finderGitHubAPI/",
    },
    {
      proj: "roll-adive-advisor",
      exp: "React fetchAPI react-icons sass",
      img: <img src={pjt2} alt="roll-adive-advisor" />,
      id: 2,
      url: "https://maicondguerian.github.io/roll-dice-advisor-api/",
    },
    {
      proj: "interactive-rating-component/",
      exp: "exp",
      img: <img src={pjt3} alt="roll-adive-advisor" />,
      id: 3,
      url: "https://front-end-mentor-challenge-next-js.vercel.app/",
    },
    {
      proj: "sign-up-with-success-message-NEXTI.JS",
      exp: "Next-JS, styled-components, M-UI",
      img: <img src={pjt4} alt="roll-adive-advisor" />,
      id: 4,
      url: "https://front-end-mentor-challenge-next-js.vercel.app/",
    },
    {
      proj: "interactive-pricing-component",
      exp: "Next-JS, styled-components",
      id: 5,
      img: <img src={pjt5} alt="roll-adive-advisor" />,
      url: "https://front-end-mentor-challenge-next-js.vercel.app/",
    },
    { proj: "--", exp: "exp", id: 6 },
  ];

  const SetThumbnail = () => {
    return projectsList.map((mock) => <List mock={mock} key={mock.id} />);
  };

  return (
    <>
      <span ref={projectsSectionRef} />
      <span />
      <S.StyledContainerDiv>
        <span>
          <AllTitlesStyle customName="Projects" />
        </span>
      </S.StyledContainerDiv>
      <S.StyledProjectThumb>
        <SetThumbnail />
      </S.StyledProjectThumb>
    </>
  );
};
