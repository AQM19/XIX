import type { AppProps } from 'next/app'

import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '@/themes'
import Cookies from 'js-cookie';

import '@/styles/globals.css';
import { UIProvider } from '@/context/ui';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  // const [currentTheme, setCurrentTheme] = useState(darkTheme);

  // useEffect(() => {

  //   const cookieTheme = Cookies.get('theme') || lightTheme;
  //   const selectedTheme = cookieTheme === lightTheme
  //     ? lightTheme
  //     : darkTheme

  //   setCurrentTheme(selectedTheme);
  // }, [])

  return (
    <UIProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  )
}
