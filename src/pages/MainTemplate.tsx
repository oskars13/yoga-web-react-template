/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState, MouseEvent } from "react";
import { paths } from "../routes";

import '../css/index.css'

import Nav from "../components/Nav";
import SocialLinkable from "../components/SocialLinkeable";

export default function MainTemplate() {

  const navigate = useNavigate()

  const [ isHidden, setIsHidden ] = useState(true)
  const handleClickOnMenu = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    event.preventDefault()
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

      <button
        onClick={ (e) => handleClickOnMenu(e) }
      >
        <img 
          alt="Icono de menú de navegación"
          src="../../public/menu.png"
        />
      </button>

          
      <section id="menu" className={`${ isHidden? 'hide':'show-flex-col' }`}>
        <h2>Menú Principal</h2>

        <Nav>
          <Link to={ paths.home }>Inicio</Link>
          <Link to={ paths.quienSoy }>Quien Soy</Link>
          <Link to={ paths.prioridad }>Mi Prioridad</Link>
          <Link to={ paths.recursos }>Recursos</Link>
          <Link to={ paths.contacto }>Contacto</Link>
        </Nav>

        <Nav>
          <SocialLinkable web="instagram" username="auroraalcor" />
          <SocialLinkable web="facebook" username="brenda.sul.75" />
          <SocialLinkable web="linkedin" username="ernestomg" />
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