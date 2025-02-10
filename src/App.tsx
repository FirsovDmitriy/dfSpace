import React from "react"
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { useRoutes } from "react-router-dom"
import routes from "./routes"

function App() {
  const element = useRoutes(routes)

  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    }
  })

  return (
    <React.Fragment>
      <ThemeProvider theme={ darkTheme }>
        <CssBaseline />
        { element }
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
