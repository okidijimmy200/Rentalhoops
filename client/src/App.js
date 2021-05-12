import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import { Provider } from 'react-redux'
import store from './store/store'


const App = () => {
  return (
    <Provider store={store}>
        <BrowserRouter>
        <ThemeProvider theme={theme}>
          <MainRouter/>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>

)}

export default App
