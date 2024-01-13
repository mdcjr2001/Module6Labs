import { useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import BigCats from './components/BigCats'
import Emoji from './components/Emoji'

function App() {

  return (
    <>
      <Greeting name='Marcus'/> 
      <br />
      <br />
      <BigCats/> 
      <Emoji/>
    </>
  )
}

export default App