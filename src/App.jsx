import { HashRouter } from 'react-router-dom'
import './App.css'
// import nav components
import Header from './components/nav/Header'
import Footer from './components/nav/Footer'
import Links from './routes/Links'
// import PokeContextProvider
import { PokeContextProvider } from './context/PokeContext'

const App = () => {

  return (
    <HashRouter>
      <PokeContextProvider>
        <Header/>
        <Links/>
        <Footer/>
      </PokeContextProvider>
    </HashRouter>
  )
}

export default App
