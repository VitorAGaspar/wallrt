import { ThemeProvider } from 'styled-components'

import { theme } from './styles/theme'
import { GlobalStyles } from './styles/global'
import { Router } from './routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  )
}

export default App
