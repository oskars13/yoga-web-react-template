import SliderX from "../components/SliderX";
import SliderXSlide from "../components/SliderXSlide";
import { paths } from "../routes";


export default function Home(){

  return (
    <>
      <SliderX name="slider-1">
        <SliderXSlide
          title="Sección 1"
          contents="hola mundo contenidos"
          link={{ to: paths.recursos, text: 'ver más'}}
        />
        <SliderXSlide
          title="Sección 2"
          contents="hola mundo contenidos"
          link={{ to: paths.recursos, text: 'ver más'}}
        />
        <SliderXSlide
          title="Sección 3"
          contents="hola mundo contenidos"
          link={{ to: paths.recursos, text: 'ver más'}}
        />
        <SliderXSlide
          title="Sección 4"
          contents="hola mundo contenidos"
          link={{ to: paths.recursos, text: 'ver más'}}
        />
      </SliderX>
    </>
  )
}