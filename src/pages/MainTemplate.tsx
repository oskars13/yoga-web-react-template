/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet, Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import { paths } from "../routes";

import '../css/index.css'

export default function MainTemplate() {

  const navigate = useNavigate()

  const [ isHidden, setIsHidden ] = useState(true)
  const handleClickOnMenu = () => {
    setIsHidden(!isHidden)
  }

  useEffect(() => {
    if (location.pathname === '/'){
      navigate(paths.home)
    }
  } ,[])
  
  return (
  <>
    <header id="navigation">
      <h1>Aurora Alcor</h1>

      <img 
        src="../../public/menu.png"
        alt="Icono de menú de navegación"
        onClick={ handleClickOnMenu }
      />

          
      <section className={`menu ${ isHidden? '':'show-flex' }`}>
        <h2>Menú Principal</h2>

        <Nav>
          <Link to={ paths.home }>Inicio</Link>
          <Link to={ paths.quienSoy }>Quien Soy</Link>
          <Link to={ paths.prioridad }>Mi Prioridad</Link>
          <Link to={ paths.recursos }>Recursos</Link>
          <Link to={ paths.contacto }>Contacto</Link>
        </Nav>
      </section>
    </header>

    <main>
      <Outlet />
    </main>

    <footer>footer</footer>
  </>
  )
}