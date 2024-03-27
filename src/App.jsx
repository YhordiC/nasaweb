
import { HashRouter, Route, Routes,  } from 'react-router-dom'
import './App.css'
import Form from './components/Form'
import {SpaceDetails} from './components/SpaceDetails'

function App() {
  
  return (
    <HashRouter>
    
     <Routes>
       <Route path='/space/:title' element={<SpaceDetails/>}/>
       <Route path='/' element={<Form/>}/>
       <Route path='*' element={<div className='text-5xl'>404</div>}/>
     </Routes>
     
    </HashRouter>
    
  )
}

export default App
