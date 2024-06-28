
import './App.css'
import {motion} from 'framer-motion'
import AppHeader from './components/AppHeader'
import HomePage from './pages/homepage'
import FooterPage from './components/footer'
import Aboutus from './pages/about'
import Produits from './pages/produits'
function App() {


  return (
    <>
    <div className=' '>
     <header className='sticky top-0 z-50'>
       <AppHeader />
      </header>
      <main>
        <HomePage/>
        <Aboutus/>
        <Produits/>
      </main>
      <footer>
        <FooterPage/>
      </footer>
      </div>
    </>
  )
}

export default App
