import styled from "styled-components";
import { VscGithubInverted } from "react-icons/vsc";
import { BsLinkedin, BsInstagram, BsDiscord, BsSun } from "react-icons/bs";

const StyledNav = styled.nav`
  color: ${(props) => props.theme.primaryColors.fontWhite};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;

  div{
    a:nth-child(4){
      svg{
      &:hover{
        fill:	#5865f2; 
      }
    }
    }
    a:nth-child(1){
      svg{
      &:hover{
        fill:	#2867b2; 
      }
    }
    }
    a:nth-child(3){
      svg{
      &:hover{
        fill:	#8a3ab9; 
      }
    }
    }
    a:nth-child(2){
      svg{
      &:hover{
        fill:	#151515; 
      }
    }
    }
    button{
      background-color:transparent;
      border: none;
      margin: 0 1rem;
      cursor:pointer;
      position: absolute;

      a:nth-child(1){
      svg{
      &:hover{
        fill:	${props => props.theme.primaryColors.fontWhite}; 
      }
    }
    }
     
    }
  }
`
const StyledLink = styled.a`
  color: inherit;
  margin: 0 1rem;
  right: 0;
`
const StyledDiv = styled.div`
  h1{
    cursor: pointer;
    font-size: 24px;
  }
`
const LinksGroup = styled.div`
`
export const DevLogo = () => {
  return (
    <StyledDiv>
      <h1>maicondguerian.dev</h1>
    </StyledDiv>
  )
}

export const NavLinks = ( {Icon, onClick=()=>{}} ) => {
  return (
    <StyledNav id="topo">
    <DevLogo />
      <LinksGroup>
        <StyledLink href=""><BsLinkedin size={30}/></StyledLink>
        <StyledLink href=""><VscGithubInverted size={30}/></StyledLink>
        <StyledLink href=""><BsInstagram size={30}/></StyledLink>
        <StyledLink href=""><BsDiscord size={30}/></StyledLink>
        <button onClick={onClick}><a href="#topo">{Icon? <Icon size={25}/> : <></>}</a></button>
      </LinksGroup>
    </StyledNav>
  );
};
