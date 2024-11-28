import MainSection from "../components/MainSection";
import Slide from "../components/slider/Slide";
import Slider from "../components/slider/Slider";
import { paths } from "../routes";



export default function Home(){

  return (
    <>
      <MainSection title="Una poquito sobre mí...">
        <p
          >Antes de nada me presento, me llamo Irene. Nacida en Valencia, España he sentido siempre un incesante deseo de conocer el cuerpo en su plenitud. 
        </p>
      </MainSection>

      <Slider name="main-slider" >
        <Slide 
          title="Sección 1"
          contents="Contenidos de la sección 1"
          button={{ link: paths.recursos, text: 'Ver Más' }} />
        <Slide 
          title="Sección 2"
          contents="Contenidos de la sección 2"
          button={{ link: paths.recursos, text: 'Ver Más' }} />
        <Slide 
          title="Sección 3"
          contents="Contenidos de la sección 3"
          button={{ link: paths.recursos, text: 'Ver Más' }} />
      </Slider>
    </>
  )
}