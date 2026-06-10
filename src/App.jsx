import './App.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logoLele from './assets/lelecarnitaslogo.svg'
import logoHuevo from './assets/Logo-Los-Arcos.svg'

function App() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 600);
  }

  return (
    <>
      <section id="center">
        <h1>Seleccione a dónde quiere entrar</h1>
        <section className={isMobile ? "block" : "flex justify-content-center align-items-center gap-1rem"}>
          <Link to="/huevo" id='logo-huevo'><img src={logoHuevo} alt="" /></Link>
          <Link to="" id='logo-lele'><img src={logoLele} alt="" /></Link>
        </section>
      </section>
    </>
  )
}

export default App
