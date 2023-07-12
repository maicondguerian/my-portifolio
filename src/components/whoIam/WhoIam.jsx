import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Buttom } from "../buttom/Buttom";
import { FiClipboard } from "react-icons/fi";
const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 3em;
  min-height: 600px;
  border-bottom: 1px solid;
  margin-top: 5rem;

  div:first-of-type {
    h1 {
      font-size: 80px;
      position: relative;
      z-index: 100;
    }
  }
`;
const StyledAvatar = styled.div`
  background-color: ${(props) => props.theme.primaryColors.bgAvatar};

  height: 650px;
  width: 400px;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0 10rem;
  border-bottom-left-radius: 100%;
`;

const StyledBio = styled.p`
  position: relative;
  max-width: 900px;
  text-align: left;
  font-size: 18px;
  line-height: 28px;
`;

const BottonsGroup = styled.span`
  display: flex;
  gap: 1rem;
  position: relative;

`;

const EmailSpan = styled.span`
  background-color: ${ props => props.theme.primaryColors.midGray};
  position: absolute;
  left: 0;
  bottom: -80px;
  height: 50px;
  width: 300px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.063rem 0.188rem rgb(31 50 81 / 12%), 0 0.063rem 0.125rem rgb(31 50 81 / 24%);
  color: ${ props => props.theme.primaryColors.softBlue};
  
      /* &:hover::before {
      content: "click the icon to copy! ";
      position: absolute;
      bottom: -20px; 
      right: 0;
      padding: 4px 8px;
      background-color: #3333338d;
      color: yellow;
      border-radius: 4px;
      font-size: 14px;
    } */

  &::after{
    content: "";
    position: absolute;
    left: 30px;
    top: -8px;
    width: 20px;
    height: 20px;
    background-color: ${ props => props.theme.primaryColors.midGray};
    transform: rotate(45deg);
    z-index: -1;
  }

  svg{
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
`
const Typewriter = ({ message, speed, cursorSpeed }) => {
  const [text, setText] = useState("");
  const [position, setPosition] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(message.substring(0, position));
      setPosition(position + 1);
    }, speed);
    return () => clearInterval(interval);
  }, [message, position, speed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(!showCursor);
    }, cursorSpeed);
    return () => clearInterval(cursorInterval);
  }, [showCursor, cursorSpeed]);

  return (
    <span>
      {text}
      <span style={{ visibility: showCursor ? "visible" : "hidden" }}>|</span>
    </span>
  );
};

export const WhoIam = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const emailRef = useRef(null)

  const handleClipboardChange = () => {
    navigator.clipboard.writeText(emailRef.current?.textContent)
    setIsCopied(true);
    };

  return (
    <>
      <StyledArticle>
        <div>
          <h1>
            <Typewriter
              message="Hi! I'm Maicon d'Guerian!"
              speed={300}
              cursorSpeed={300}
            />
          </h1>
        </div>
        <StyledAvatar />
        <StyledBio>
          Estudante de Sistemas em busca de conhecimento e experiência na área.
          Atualmente, estou dedicando meu tempo ao aprendizado e aprimoramento
          de habilidades voltadas para o desenvolvimento web. Tenho me
          concentrado especialmente em frameworks e bibliotecas como React, onde
          estou aprofundando meus conhecimentos e construindo projetos práticos
          para solidificar minha experiência nessa área.
        </StyledBio>
        <BottonsGroup>
          <Buttom
          onClick={()=> setShowEmail(!showEmail)}
            
            buttonName="contact me"
            bgColor={"transparent"}
            fColor={"#fff"}
          />
          {showEmail && (
           <EmailSpan ref={emailRef}>maicondguerian@pronton.me
            <FiClipboard 
              size={20} 
              onClick={handleClipboardChange}
              stroke={isCopied? '#7ABE82' : '#333'}
              />
           </EmailSpan>
          )}
          <a href="../../../public/maicondgueriandev.pdf" download>
            <Buttom
              buttonName="download-cv"
              bgColor={"transparent"}
              fColor={"#fff"}
            />
          </a>
        </BottonsGroup>
      </StyledArticle>
    </>
  );
};
