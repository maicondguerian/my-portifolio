import styled from "styled-components";
import { VscGithubInverted } from "react-icons/vsc";
import { BsLinkedin, BsInstagram, BsDiscord } from "react-icons/bs";

const StyledNav = styled.nav`
  color: ${(props) => props.theme.primaryColors.fontWhite};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  position: relative;

  div:last-of-type{
  
    a{
      margin: 0 1rem;
    }
  }
`
const StyledLink = styled.a`
    color: inherit;
`
export const NavLinks = () => {
  return (
    <StyledNav>
      <div>
        <span> 
          <h1>maicondguerian</h1>
        </span>
      </div>
      <div>
        <StyledLink href=""><span><BsLinkedin size={25}/></span></StyledLink>
        <StyledLink href=""><span><VscGithubInverted size={25}/></span></StyledLink>
        <StyledLink href=""><span><BsInstagram size={25}/></span></StyledLink>
        <StyledLink href=""><span><BsDiscord size={25}/></span></StyledLink>
      </div>
    </StyledNav>
  );
};
