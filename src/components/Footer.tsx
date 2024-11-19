import Nav from "./Nav";
import SocialLinkable from "./SocialLinkeable";

import '../css/Footer.css'
import { FormEvent } from "react";


export default function Footer (){

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <footer>
      <section className="footer-section">
        <h3>¡Visita mis Redes!</h3>

        <Nav className="footer-nav">
          <SocialLinkable web="instagram" username="auroraalcor" />
          <SocialLinkable web="facebook" username="brenda.sul.75" />
          <SocialLinkable web="linkedin" username="ernestomg" />
        </Nav>
      </section>

      <hr />

      <section className="footer-section">
        <h3>Contacta conmigo:</h3>

        <form action="post" onSubmit={ (e) => handleFormSubmit(e) }>
          <input type="text" name="name" placeholder="Nombre" />
          <input type="text" name="phone" placeholder="Teléfono" />
          <input type="email" name="mail" placeholder="Correo Electrónico" />
          <input type="text" name="message" placeholder="Mensaje" />

          <input type="submit" value="Enviar" className="submit-button"/>
        </form>
      </section>
    </footer>
  )
}