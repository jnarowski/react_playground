import React from 'react'
import { Route } from 'react-router-dom'
// components
import Navbar from 'components/navbar'
import Home from 'containers/home'
import About from 'containers/about'
import Widgets from 'containers/widgets'
import WidgetsStarterKit from 'containers/widgets-starter-kit'

const App = () => (
  <div>
    <Navbar />
    <div className="container pt-3">
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/widgets" component={Widgets} />
        <Route
          exact
          path="/widgets-starter-kit"
          component={WidgetsStarterKit}
        />
      </main>
    </div>
  </div>
)

export default App
