import React from 'react'
import { Route, Routes } from 'react-router'
import CaseBattle from './Components/CaseBattle'

const App = () => {
  return (
  <Routes>
      <Route path="/" element={<CaseBattle/>}/>
   
    

    
    </Routes>
  )
}

export default App