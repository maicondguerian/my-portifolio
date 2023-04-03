import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledArticle = styled.article`
  margin-top: 3em;
  display:flex;
  flex-direction: column;
  gap: 3em;

  div:first-of-type {
    h1 {
      font-size: 80px;
      position: relative;
      z-index: 1000;
    }
  }
`
 const StyledAvatar = styled.div`
    background-color: ${props => props.theme.primaryColors.darkGray};
    height: 600px;
    width: 350px;
    position: absolute;
    right: 0;
    top: 0;
    margin: 0 10rem;
 `
const StyledBio= styled.p`
    position: relative;
    max-width: 445px;
    text-align: left;
    font-size: 18px;
    line-height: 28px;
`

const StyledButtons = styled.button`
     color: ${props => props.fColor};
     background-color: ${props => props.bgColor};
     
     &afterContent: {
        content: props => "'" + props.buttonName + "'",
        marginLeft: '5px'
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
  return (
    <StyledArticle>
      <div>
        <h1>
          <Typewriter
            message="Hi! I'm Maicon d'Guerian!"
            speed={300}
            cursorSpeed={400}
          />
        </h1>
      </div>
      <StyledAvatar/>
      <StyledBio>
        Based in the UK, I’m a front-end developer passionate about building
        accessible web apps that users love.
      </StyledBio>
      <StyledButtons />
    </StyledArticle>
  );
};
