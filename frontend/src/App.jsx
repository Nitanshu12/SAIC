import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Services from './pages/Services'
import Contacts from './pages/Contacts'


function App() {
  return (
   <BrowserRouter>
   <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contacts/>} />
    </Routes>
    <Footer />
   </BrowserRouter>
  )
}

export default App
