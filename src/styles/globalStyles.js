import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Space Grotesk', sans-serif;
  color: ${(props) => props.theme.primaryColors.fontWhite};
  outline: none;
}
`;

export const StyledButton = styled.button`
    background-color: transparent;
    font-size: ${props => props.fSize || '16px'};
    border: none;
    text-transform: uppercase ;
    border-bottom: 2px solid ${props => props.theme.primaryColors.softBlue};
    height: 40px;
    font-weight:600;
    cursor: pointer;
`;

export const StyledTitle = styled.h1`
    text-transform:uppercase;
    font-size: 50px;
    font-weight: 900;
    border-bottom: 2px solid ${props => props.theme.primaryColors.softBlue};
    font-style: italic;
`;

export const StyledContainer = styled.main`
  background-color: ${props => props.theme.primaryColors.midDark};
  padding: 1rem 10rem 0 ;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FooterWrapper = styled.footer`
  background-size:cover;
  height:200px;
  position: relative;
  border-top:  solid 1px ;
  span{
    position:absolute;
    bottom:0;
    width:100%;
  }
`;

export const StyledOverlay = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const StyledContainerDiv = styled.div`
  position: relative;

  span {
    display: flex;
    align-items: center;

    h1 {
      text-transform: uppercase;
      font-style: italic;
      font-size: 50px;
      font-weight: 900;
      border-bottom: 2px solid ${(props) => props.theme.primaryColors.softBlue};
      margin-right: 0.6rem;
    }
  }
`;

export const StyledProjectThumb = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 3rem;
  color: #000;

  li {
    background-color: ${(props) => props.theme.primaryColors.softGray};
    height: 400px;
    margin-bottom: 0.5rem;
    position: relative;
    overflow: hidden;
    display: block;
    border-bottom: solid 1px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const InfosWrapper = styled.span`
  display: flex;
  flex-direction: column;

  span {
    font-size: 25px;
  }
`;

export const StyledNav = styled.nav`
  color: ${(props) => props.theme.primaryColors.fontWhite};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ThemeButtom = styled.button`
  background-color: transparent;
  border: none;
  margin: 0 -2rem;
  cursor: pointer;
`;

export const StyledLink = styled.a`
  color: inherit;
  margin: 0 0.5rem;
  padding: 0.5rem 0;
`;

export const StyledDiv = styled.div`
  h1 {
    cursor: pointer;
    font-size: 24px;
  }
`;


export const SocialLinksWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 220px;
  background-color: ${ props => props.theme.primaryColors.bgAvatar};
    border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  box-shadow: 0 0.063rem 0.188rem rgb(31 50 81 / 12%), 0 0.063rem 0.125rem rgb(31 50 81 / 24%);
  
  a:nth-child(4) {
    svg {
      &:hover {
        fill: #5865f2;
      }
    }
  }
  a:nth-child(1) {
    margin-top: 0.5rem;
    svg {
      &:hover {
        fill: #2867b2;
      }
    }
  }
  a:nth-child(3) {
    svg {
      &:hover {
        fill: #8a3ab9;
      }
    }
  }
  a:nth-child(2) {
    svg {
      &:hover {
        fill: #fff;
      }
    }
  }
  `;


export const MenuLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  height: 60px;
  width: calc(100% - 20rem);
  background-color: ${(props) => props.theme.primaryColors.bgAvatar};
  z-index: 1000;

  span {
    position: absolute;
    right: 0;

    button {
      margin: 0 0.2rem 0 1rem;
    }
  }
`;

export const StyledContainerSkills = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    justify-content:space-between;

    span{
        display: flex;
    }
`
export const StyledUl = styled.ul`
    list-style:none;
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    grid-column-gap: 1rem;
    grid-row-gap: 4rem;

    
    li{
        span{
            font-size: 40px;
            display:flex;
            align-items:center;
        } 
    }

    li:nth-child(1) span,
    li:nth-child(2) span {
        text-transform: uppercase;
    }
`;

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 3em;
  min-height: 600px;
  border-bottom: 1px solid;
  margin-top: 5rem;

  div:first-of-type {
    h1 {
      font-size: 80px;
      position: relative;
      z-index: 100;
    }
  }
`;

export const StyledAvatar = styled.div`
  background-color: ${(props) => props.theme.primaryColors.bgAvatar};

  height: 650px;
  width: 400px;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0 10rem;
  border-bottom-left-radius: 100%;
`;

export const StyledBio = styled.p`
  position: relative;
  max-width: 900px;
  text-align: left;
  font-size: 18px;
  line-height: 28px;
`;

export const BottonsGroup = styled.span`
  display: flex;
  gap: 1rem;
  position: relative;

`;

export const EmailSpan = styled.span`
  background-color: ${ props => props.theme.primaryColors.midGray};
  position: absolute;
  left: 0;
  bottom: -80px;
  height: 50px;
  width: 300px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.063rem 0.188rem rgb(31 50 81 / 12%), 0 0.063rem 0.125rem rgb(31 50 81 / 24%);
  color: ${ props => props.theme.primaryColors.softBlue};
  
      /* &:hover::before {
      content: "click the icon to copy! ";
      position: absolute;
      bottom: -20px; 
      right: 0;
      padding: 4px 8px;
      background-color: #3333338d;
      color: yellow;
      border-radius: 4px;
      font-size: 14px;
    } */

  &::after{
    content: "";
    position: absolute;
    left: 30px;
    top: -8px;
    width: 20px;
    height: 20px;
    background-color: ${ props => props.theme.primaryColors.midGray};
    transform: rotate(45deg);
    z-index: -1;
  }

  svg{
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }
`;
