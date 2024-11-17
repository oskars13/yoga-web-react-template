import { paths } from "../routes"
import { Link } from "react-router-dom"

type Props = {
  id?: string
  title?: string
  contents?: string
  link?: { to: paths, text: string }
}

type RGB = {
  red: number,
  blue: number,
  green: number
}

export default function SliderXSlide(props: Props) {

  const randomColor = (): RGB => {
    const random = () => Math.random()*255
    return {
      red: random(),
      blue: random(),
      green: random()
    }
  }

  const colorToCss = (RGB: RGB) => {
    const rgb = Object.values(RGB)
    return `rgb(${rgb.map( color => `${color}`).join()})`
  }

  return (
    <section className="slider-x-slide" id={ props.id } style={{ backgroundColor: colorToCss(randomColor()) }}>
      { props.title && <h2>{ props.title }</h2> }
      { props.contents && <p>{ props.contents }</p> }
      { 
        props.link && 
        <Link
          to={ '/'+props.link.to }
        >{ props.link.text }
        </Link>  
      }
    </section>
  )
}