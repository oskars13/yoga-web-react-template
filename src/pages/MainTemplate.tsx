/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState, MouseEvent } from "react";
import { paths } from "../routes";

import '../css/index.css'
import '../css/Header.css'
import '../css/build/colors.css'

import Nav from "../components/Nav";
import SocialLinkable from "../components/SocialLinkeable";
import ImageButton from "../components/ImageButton";
import Footer from "../components/Footer";

export default function MainTemplate() {

  const navigate = useNavigate()

  const [ isHidden, setIsHidden ] = useState(true)
  const handleClickOnMenu = (event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
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
      <h1>Irene Alcor</h1>

      <ImageButton 
        image="/menu.png"
        onClick={ (e) => handleClickOnMenu(e) }
        altText="Icono de Menú de Navegación"
      />

          
      <section id="menu" className={`${ isHidden? 'hide':'show-menu' }`}>
        <section className="menu-visible">
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

        <div 
          className="menu-exit"
          onClick={ e => handleClickOnMenu(e) }></div>
      </section>

    </header>

    <main>
      <Outlet />
    </main>

    <Footer />
  </>
  )
}