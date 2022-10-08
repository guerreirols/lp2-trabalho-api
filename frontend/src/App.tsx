import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './assets/components/Header'
import SalesCard from './assets/components/SalesCard'


function App() {


  return (
    <>
      <Header />
      <main>
        <SalesCard/>
      </main>
    </>

  )
}

export default App
