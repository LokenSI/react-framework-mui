import { ThemeProvider } from '@emotion/react'
import { PhotoCamera } from '@mui/icons-material'
import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material'
import React from 'react'
import theme from '../theme'
import Logo from './logo'

export default function TopBar() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Logo />
          </Toolbar>
        </AppBar>
    </ ThemeProvider>
  )
}
