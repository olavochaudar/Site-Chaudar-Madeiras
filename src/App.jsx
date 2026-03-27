import React from 'react'
import Header from './components/Header'
import Apresentação from './components/Apresentação'
import NavBar from './components/NavBar'
import Carrosel from './components/Carrosel'
import Videos from './components/Videos'
import Contato from './components/Contato'
import Footer from './components/Footer'
import Banner from './components/Banner'
import MadeiraEucaliptoAparelhada from './components/MadeiraEucaliptoAparelhada'

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Apresentação />
      <NavBar />
      <Carrosel />
      <MadeiraEucaliptoAparelhada />
      <Videos />
      <Contato />
      <Footer />
    </div>
  )
}

export default App