import styled from "styled-components"
import { NavLinks } from "../navLinks/NaxLinks"
import { ImArrowUp } from "react-icons/im";


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
  return (
    <FooterWrapper>
        <span>
          <NavLinks Icon={ImArrowUp} />
        </span>
    </FooterWrapper>
  )
}
