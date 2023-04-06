import { useState } from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { Container } from "./components/container/Container"
import { MyContext } from "./context/MyContext"
import { darkThemeColor, theme } from "./theme/theme"
import { NavLinks } from "./components/navLinks/NaxLinks"
import { WhoIam } from "./components/whoIam/WhoIam"
import { MySkills } from "./components/skills/mySkills"
import { Projects } from "./components/myProjects/Projects"
import { BsSun, BsMoonFill } from "react-icons/bs";
import { Contact } from "./components/contact/Contact"
import { Footer } from "./components/footer/Footer"

export const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleTheme, setToggleTheme] = useState(theme);

  const handleShowModal = () => {
    setIsOpen(true);
  }

  const handleToggleTheme = () => {
    if ( toggleTheme === theme){
      setToggleTheme(darkTheme);
    }else{
      setToggleTheme(theme);
    }
  }

  const darkTheme = {
    ...theme,
    primaryColors: {
      ...theme.primaryColors,
      ...darkThemeColor
    }
  }

  const GlobalStyles = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Space Grotesk', sans-serif;
      color: ${ props => props.theme.primaryColors.fontWhite};
      outline: none;
    }
  `
  return (
    <MyContext.Provider value={{handleShowModal, isOpen, setIsOpen, handleToggleTheme }}>
      <ThemeProvider theme={toggleTheme}>
        <GlobalStyles />
        <Container>
          <NavLinks Icon={toggleTheme === theme ? BsSun : BsMoonFill } size={25} onClick={handleToggleTheme}/>
          <WhoIam />
          <MySkills />
          <Projects />
          <Contact />
          <Footer />
        </Container>
      </ThemeProvider>
    </MyContext.Provider>
  )
}

