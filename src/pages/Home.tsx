import Slide from "../components/slider/Slide";
import Slider from "../components/slider/Slider";
import { paths } from "../routes";



export default function Home(){

  return (
    <>
      <Slider name="main-slider" reverse >
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