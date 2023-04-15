import styled from "styled-components";
import { VscGithubInverted } from "react-icons/vsc";
import { BsLinkedin, BsInstagram, BsDiscord } from "react-icons/bs";
import { Buttom } from "../buttom/Buttom";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";

export const StyledNav = styled.nav`
  color: ${(props) => props.theme.primaryColors.fontWhite};
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`
export const ThemeButtom = styled.button`
    background-color:transparent;
    border: none;
    margin: 0 -2rem;
    cursor:pointer;
`
const StyledLink = styled.a`
  color: inherit;
  margin: 0 0.5rem;
  padding: 0.5rem 0;

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

const SocialLinksWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex; 
  flex-direction: column; 
  justify-content: center;
  height: 220px;
  background-color: ${props => props.theme.primaryColors.bgAvatar};
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;

  a:nth-child(4){
    svg{
    &:hover{
      fill:	#5865f2;
    }
    
  }
  }
  a:nth-child(1){
    margin-top: 0.5rem;
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
      fill:	#fff; 
    }
  }
  }
`;

const SocialLinks = () => {
  return(
    <SocialLinksWrapper>
      <StyledLink href="https://www.linkedin.com/in/maicondguerian/" target="_blank"><BsLinkedin size={30}/></StyledLink>
      <StyledLink href="https://github.com/maicondguerian" target="_blank"><VscGithubInverted size={30}/></StyledLink>
      <StyledLink href="https://www.instagram.com/maicondguerian/" target="_blank"><BsInstagram size={30}/></StyledLink>
      <StyledLink href="https://www.discordapp.com/users/155150206005018625" target="_blank"><BsDiscord size={30}/></StyledLink>
    </SocialLinksWrapper>
  )
}

const MenuLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  height: 60px;
  width: calc(100% - 20rem);
  background-color: ${props => props.theme.primaryColors.bgAvatar};
  z-index: 1000;

  span{
    position: absolute;
    right: 0;
  
    button{
      margin: 0 0.2rem 0 1rem;
    }
  }
`
const FixedBar = () => {
  const { movePage } = useContext(MyContext);
  const buttons = [];
  for(let i = 0; i < 4; i++){
    buttons.push(<Buttom 
      key={i}
      fSize={'13px'}
      bgColor={'transparent'}
      onClick={movePage}
      buttonName={`customname${i}`}
      />)
  }
  return(
    <MenuLinksWrapper>
      <DevLogo />
        <span>
          {buttons}
        </span>
    </MenuLinksWrapper>
  )
}

export const NavLinks = ( {Icon, onClick=()=>{}} ) => {
  return (
    <StyledNav>
      <FixedBar />
      <div/>
      <ThemeButtom onClick={onClick}>{Icon? <Icon size={25}/> : <></>}</ThemeButtom>
      <SocialLinks />
    </StyledNav>
  );
};
