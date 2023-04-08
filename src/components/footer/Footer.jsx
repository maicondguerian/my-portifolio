import styled from "styled-components"
import { DevLogo, NavLinks } from "../navLinks/NaxLinks"
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
export const Footer = () => {
  const { handleScrollToTop } = useContext(MyContext);
  return (
    <FooterWrapper>
      <span>
        <NavLinks Icon={ImArrowUp} onClick={handleScrollToTop}/>
      </span>
    </FooterWrapper>
  )
}
