import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Route from './routes'
const App = () => {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  )
}

export default App

