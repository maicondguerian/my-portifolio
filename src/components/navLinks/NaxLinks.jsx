import styled from "styled-components";
import { VscGithubInverted } from "react-icons/vsc";
import { BsLinkedin, BsInstagram, BsDiscord, BsSun } from "react-icons/bs";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

const StyledNav = styled.nav`
  color: ${(props) => props.theme.primaryColors.fontWhite};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  div{
    button{
      background-color:transparent;
      border: none;
      margin: 0 1rem;
      cursor:pointer;
    }
  }
`
const StyledLink = styled.a`
  color: inherit;
  margin: 0 1rem;
`

const StyledDiv = styled.div`
  h1{
    cursor: pointer;
    font-size: 24px;
  }
`
export const DevLogo = () => {
  return (
    <StyledDiv>
      <h1>maicondguerian.dev</h1>
    </StyledDiv>
  )
}

export const NavLinks = ( {Icon} ) => {
  const { handleToggleTheme } = useContext(MyContext);
  return (
    <StyledNav>
    <DevLogo />
      <div>
        <StyledLink href=""><BsLinkedin size={25}/></StyledLink>
        <StyledLink href=""><VscGithubInverted size={25}/></StyledLink>
        <StyledLink href=""><BsInstagram size={25}/></StyledLink>
        <StyledLink href=""><BsDiscord size={25}/></StyledLink>
        <button onClick={handleToggleTheme}><Icon size={25}/></button>
      </div>
    </StyledNav>
  );
};
