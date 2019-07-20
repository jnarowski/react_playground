import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Navbar from '../../components/navbar'

const App = () => (
  <div>
    <Navbar />
    <div className='container pt-3'>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
      </main>
    </div>
  </div>
)

export default App
