import { VscGithubInverted } from "react-icons/vsc";
import { BsLinkedin, BsInstagram, BsDiscord } from "react-icons/bs";
import { Buttom } from "../buttom/Buttom";
import { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import * as S from "../../styles/globalStyles";

const SocialLinks = () => {
  return (
    <S.SocialLinksWrapper>
      <S.StyledLink
        href="https://www.linkedin.com/in/maicondguerian/"
        target="_blank"
      >
        <BsLinkedin size={30} />
      </S.StyledLink>
      <S.StyledLink href="https://github.com/maicondguerian" target="_blank">
        <VscGithubInverted size={30} />
      </S.StyledLink>
      <S.StyledLink
        href="https://www.instagram.com/maicondguerian/"
        target="_blank"
      >
        <BsInstagram size={30} />
      </S.StyledLink>
      <S.StyledLink
        href="https://www.discordapp.com/users/155150206005018625"
        target="_blank"
      >
        <BsDiscord size={30} />
      </S.StyledLink>
    </S.SocialLinksWrapper>
  );
};
export const DevLogo = () => {
  return (
    <S.StyledDiv>
      <h1>maicondguerian.dev</h1>
    </S.StyledDiv>
  );
};

const FixedBar = () => {
  const { moveToSkills, moveToProjects } = useContext(MyContext);
  
  return (
    <S.MenuLinksWrapper>
      <DevLogo />
      <span>
        <a href="../../../public/maicondgueriandev.pdf" download>
          <Buttom
            buttonName="download-cv"
            bgColor={"transparent"}
            fColor={"#fff"}
          />
        </a>
        <Buttom
          bgColor={"transparent"}
          onClick={moveToSkills}
          buttonName={"Skiils"}
        />
        <Buttom
          bgColor={"transparent"}
          onClick={moveToProjects}
          buttonName={"Projects"}
        />
      </span>
    </S.MenuLinksWrapper>
  );
};

export const NavLinks = ({ Icon, onClick = () => {} }) => {
  return (
    <S.StyledNav>
      <FixedBar />
      <div />
      <S.ThemeButtom onClick={onClick}>
        {Icon ? <Icon size={25} /> : <></>}
      </S.ThemeButtom>
      <SocialLinks />
    </S.StyledNav>
  );
};
