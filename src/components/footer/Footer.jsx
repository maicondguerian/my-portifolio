import styled from "styled-components"
import {  DevLogo, StyledNav, ThemeButtom } from "../navLinks/NavLinks"
import { ImArrowUp } from "react-icons/im";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";


const FooterWrapper = styled.footer`
  background-image: url('../../../public/pattern.svg');
  background-size:cover;
  height:300px;
  position: relative;

    span{
      position:absolute;
      bottom:0;
      width:100%;
    }
`
const FooterLinks = ({Icon, onClick=()=>{}}) => {
  return(
    <StyledNav>
      <DevLogo />
      <ThemeButtom onClick={onClick}>{Icon? <Icon size={25}/> : <></>}</ThemeButtom>
    </StyledNav>
  )
}

export const Footer = () => {
  const { handleScrollToTop } = useContext(MyContext);
  return (
    <FooterWrapper>
      <span>
        <FooterLinks Icon={ImArrowUp} onClick={handleScrollToTop}/>
      </span>
    </FooterWrapper>
  )
}
