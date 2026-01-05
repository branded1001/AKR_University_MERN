import React from 'react'
import Header from './Header'
import Footer from './Footer'
import MainRoute from './MainRoute'



function App() {
  return (
    <>
     <Header/>
     
     <main className="grow">
        <MainRoute />
       
      
      </main>
      <Footer/>
      
    </>
  )
}

export default App
