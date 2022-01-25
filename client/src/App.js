import './App.css'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Homepage from './components/Homepage'

function App () {
  const [user, setUserState] = useState({})
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/logout' element={<LandingPage />} />
          <Route
            exact
            path='/login'
            element={
              user && user._id ? (
                <Homepage />
              ) : (
                <Login loginUser={setUserState} />
              )
            }
          ></Route>
          <Route
            exact
            path='/login'
            element={<Login loginUser={setUserState} />}
          />
          <Route exact path='/signup' element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
