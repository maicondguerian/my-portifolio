import { ThemeProvider, createGlobalStyle } from "styled-components"
import { Container } from "./components/container/Container"
import { MyContext } from "./context/MyContext"
import { theme } from "./theme/theme"
import { NavLinks } from "./components/navLinks/NaxLinks"
import { WhoIam } from "./components/whoIam/WhoIam"
import { MySkills } from "./components/skills/mySkills"
import { Projects } from "./components/myProjects/Projects"
import { useState } from "react"

export const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleShowModal = () => {
    setIsOpen(true);
  }
  const GlobalStyles = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Space Grotesk', sans-serif;
      color: ${ props => props.theme.primaryColors.fontWhite}
    }
  `
  return (
    <MyContext.Provider value={{handleShowModal, isOpen, setIsOpen}}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <NavLinks/>
          <WhoIam />
          <MySkills />
          <Projects />
        </Container>
      </ThemeProvider>
    </MyContext.Provider>
  )
}

