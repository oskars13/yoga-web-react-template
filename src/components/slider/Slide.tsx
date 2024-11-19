import { paths } from "../../routes"
import { Link } from "react-router-dom"


type Props = {
  title?: string
  contents?: string
  button?: { link: paths, text: string }
}

export default function Slide (props: Props){

  return (
    <section className="slide">
      { props.title && <h2>{ props.title }</h2> }
      { props.contents && <p>{ props.contents }</p> }
      {
        props.button && 
        <Link to={ '/'+props.button.link }>{ props.button.text }</Link>
      }
    </section>
  )
}