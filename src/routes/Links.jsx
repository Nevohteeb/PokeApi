import {Routes, Route} from 'react-router-dom'

// import pages:
import Homepage from '../pages/Homepage'
import SinglePokemon from '../pages/SinglePokemon'

const Links = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route path='/pokemon/' element={<SinglePokemon/>} />
    </Routes>
  )
}

export default Links