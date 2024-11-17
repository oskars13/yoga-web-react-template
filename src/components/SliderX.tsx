import { Children, cloneElement, isValidElement, ReactNode } from "react"
import '../css/slider.css'

type Props = {
  children: ReactNode
  name: string
}


export default function SliderX({ children, name }: Props) {

  const ids: string[] = []

  return (
    <section className="slider-x" id={ name } >
      <section className="slider-slides">
      {
        Children.map(children, (child, index) => {
          if (isValidElement(child)){
            const id = `${name}-slide-${index}`
            ids.push(id)
            return cloneElement(child, { id } as { id: string })
          }
          return child
        })
      }
      </section>

      <section className="slider-navigator">
      {
        Children.map(children, (_child, index) => {
          return(
            <a href={'#'+ids[index]}>
              {index+1}
            </a>
          )
        })
      }
      </section>
    </section>
  )
}