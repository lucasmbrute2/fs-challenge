import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { CompanyProvider } from "./contexts/ComapanyContext"


function App() {
  return (
    <CompanyProvider>
      <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
              <Router/>
          </BrowserRouter>
          <GlobalStyle />
      </ThemeProvider>
    </CompanyProvider>
  )
}

export default App
