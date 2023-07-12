import {  DevLogo } from "../navLinks/NavLinks"
import { ImArrowUp } from "react-icons/im";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import * as S from "../../styles/globalStyles";


const FooterLinks = ({Icon, onClick=()=>{}}) => {
  return(
    <S.StyledNav>
      <DevLogo />
      <S.ThemeButtom onClick={onClick}>{Icon? <Icon size={25}/> : <></>}</S.ThemeButtom>
    </S.StyledNav>
  )
}

export const Footer = () => {
  const { handleScrollToTop } = useContext(MyContext);
  return (
    <S.FooterWrapper>
      <span>
        <FooterLinks Icon={ImArrowUp} onClick={handleScrollToTop}/>
      </span>
    </S.FooterWrapper>
  )
}
