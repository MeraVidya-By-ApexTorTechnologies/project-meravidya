
import './App.css'
import {Header, Footer} from './components'
import {Home, About, SignUp, FindATutor, Courses, SignIn, JoinAsTutor, NotFound} from './pages'
import {Routes, Route} from 'react-router-dom'


function App() {

  return (
    <div className='app-container'>
      <div id="goToTop"/>
    <Header/>
    <div className="header-balancer" style={{height:'20vh'}}></div>
    <div className='app'>

      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/find-a-tutor' element={<FindATutor/>} />
        <Route path='/join-as-tutor' element={<JoinAsTutor/>} />
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

    </div>
    <Footer/>
    </div>
  )
}

export default App
