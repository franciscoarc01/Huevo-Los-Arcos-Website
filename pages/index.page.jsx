import { useState, useEffect } from 'react'
import logoLele from '../assets/lelecarnitaslogo.svg'
import logoHuevo from '../assets/Logo-Los-Arcos.svg'

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
          <a href="/huevo" id='logo-huevo'><img src={logoHuevo} alt="" /></a>
          <a href="https://lelemexico.com/" id='logo-lele'><img src={logoLele} alt="" /></a>
        </section>
      </section>
    </>
  )
}

export default {
  Page: App
}
