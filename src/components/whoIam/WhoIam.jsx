import React, { useState, useEffect, useRef } from "react";
import { Buttom } from "../buttom/Buttom";
import { FiClipboard } from "react-icons/fi";
import * as S from "../../styles/globalStyles";

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
      <S.StyledArticle>
        <div>
          <h1>
            <Typewriter
              message="Hi! I'm Maicon d'Guerian!"
              speed={300}
              cursorSpeed={300}
            />
          </h1>
        </div>
        <S.StyledAvatar />
        <S.StyledBio>
          Estudante de Sistemas em busca de conhecimento e experiência na área.
          Atualmente, estou dedicando meu tempo ao aprendizado e aprimoramento
          de habilidades voltadas para o desenvolvimento web. Tenho me
          concentrado especialmente em frameworks e bibliotecas como React, onde
          estou aprofundando meus conhecimentos e construindo projetos práticos
          para solidificar minha experiência nessa área.
        </S.StyledBio>
        <S.BottonsGroup>
          <Buttom
          onClick={()=> setShowEmail(!showEmail)}
            
            buttonName="contact me"
            bgColor={"transparent"}
            fColor={"#fff"}
          />
          {showEmail && (
           <S.EmailSpan ref={emailRef}>maicondguerian@pronton.me
            <FiClipboard 
              size={20} 
              onClick={handleClipboardChange}
              stroke={isCopied? '#7ABE82' : '#333'}
              />
           </S.EmailSpan>
          )}
          <a href="../../../public/maicondgueriandev.pdf" download>
            <Buttom
              buttonName="download-cv"
              bgColor={"transparent"}
              fColor={"#fff"}
            />
          </a>
        </S.BottonsGroup>
      </S.StyledArticle>
    </>
  );
};
