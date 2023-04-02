import { ThemeProvider, createGlobalStyle } from "styled-components"
import { Container } from "./components/container/Container"
import { MyContext } from "./context/MyContext"
import { theme } from "./theme/theme"

export const Index = () => {
  const GlobalStyles = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  `
  return (
    <MyContext.Provider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          
        </Container>
      </ThemeProvider>
    </MyContext.Provider>
  )
}

