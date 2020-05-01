import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ReactQueryDevtools } from 'react-query-devtools'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { ReactQueryConfigProvider, ReactQueryProviderConfig } from 'react-query'
import { theme } from './theme'

const config: ReactQueryProviderConfig = {
  cacheTime: Infinity,
  staleTime: Infinity,
  refetchOnWindowFocus: false,
}

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryDevtools />
    <ReactQueryConfigProvider config={config}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <App />
      </ThemeProvider>
    </ReactQueryConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
