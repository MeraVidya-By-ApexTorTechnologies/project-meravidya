
import './App.css'
import {Header, Footer} from './components'
import {Home, About, SignUp, FindATutor, Courses, SignIn, JoinAsTutor} from './pages'
import {Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
    <Header/>
    <div className='app'>

      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/find-a-tutor' element={<FindATutor/>} />
        <Route path='/join-as-tutor' element={<JoinAsTutor/>} />
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/courses' element={<Courses/>}/>
      </Routes>

    </div>
    <Footer/>
    </>
  )
}

export default App
