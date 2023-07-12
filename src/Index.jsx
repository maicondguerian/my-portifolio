import { useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/container/Container";
import { MyContext } from "./context/MyContext";
import { darkThemeColor, theme } from "./theme/theme";
import { NavLinks } from "./components/navLinks/NavLinks";
import { WhoIam } from "./components/whoIam/WhoIam";
import { MySkills } from "./components/skills/mySkills";
import { Projects } from "./components/myProjects/Projects";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { Footer } from "./components/footer/Footer";
import { useLocalStorage } from "./localStorage";
import * as S from "./styles/globalStyles";

export const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const startOfPageRef = useRef(null);
  const skillSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);

  const darkTheme = {
    ...theme,
    primaryColors: {
      ...theme.primaryColors,
      ...darkThemeColor,
    },
  };

  const [toggleTheme, setToggleTheme] = useLocalStorage("darkTheme", theme);

  const handleShowModal = () => {
    setIsOpen(true);
  };

  const handleToggleTheme = () => {
    if (toggleTheme === theme) {
      setToggleTheme(darkTheme);
    } else {
      setToggleTheme(theme);
    }
  };

  const handleScrollToTop = () => {
    if (startOfPageRef.current) {
      startOfPageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const moveToSkills = () => {
    skillSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const moveToProjects = () => {
    projectsSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // const handleScrollToTop = () => {
  //   const element = document.querySelector('#teste')
  //   element.scrollIntoView({behavior: 'smooth'});
  // } forma alternativa de fazer pegando o elemento  pelo id do doom/

  return (
    <MyContext.Provider
      value={{
        handleShowModal,
        isOpen,
        setIsOpen,
        handleToggleTheme,
        startOfPageRef,
        handleScrollToTop,
        skillSectionRef,
        moveToSkills,
        moveToProjects,
        projectsSectionRef,
      }}
    >
      <ThemeProvider theme={toggleTheme}>
        <S.GlobalStyles />
        <Container>
          <NavLinks
            Icon={toggleTheme === theme ? BsSun : BsMoonFill}
            size={25}
            onClick={handleToggleTheme}
          />
          <WhoIam />
          <MySkills />
          <Projects />
          <Footer />
        </Container>
      </ThemeProvider>
    </MyContext.Provider>
  );
};
