import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Buttom } from "../buttom/Buttom";

const StyledArticle = styled.article`
  display:flex;
  flex-direction: column;
  gap: 3em;
  min-height: 600px;
  border-bottom: 1px solid;

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
  
  height: 650px;
  width: 400px;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0 10rem;
  border-bottom-left-radius: 100%;
`

const StyledBio= styled.p`
  position: relative;
  max-width: 445px;
  text-align: left;
  font-size: 18px;
  line-height: 28px;
`

const BottonsGroup = styled.span`
  button:last-child{
    margin-left:1rem;
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
            cursorSpeed={300}
          />
        </h1>
      </div>
      <StyledAvatar/>
      <StyledBio>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam autem repellendus nostrum odit totam quisquam quasi dolor voluptas earum error.
      </StyledBio>
      <BottonsGroup>
        <Buttom
            buttonName='contact me'
            bgColor={'transparent'}
            fColor={'#fff'}
        />
        <a href="/../../assets/curriculo.pdf" download>
            <Buttom
                buttonName='download-cv'
                bgColor={'transparent'}
                fColor={'#fff'}
            />
        </a>
      </BottonsGroup>
    </StyledArticle>
  );
};
