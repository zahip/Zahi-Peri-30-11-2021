import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Favorits from './pages/Favorits/Favorits'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { colorMode } from 'features/colorMode/colorModeSlice'

import './App.scss'

function App() {
  const mode = useSelector(colorMode)
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  )
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/favorits" element={<Favorits />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  )
}

export default App
