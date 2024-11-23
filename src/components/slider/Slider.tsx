import { ReactNode, MouseEvent, Children } from "react"
import '../../css/Slider.css'

type Props = {
  name: string
  children: ReactNode
  neumorphism?: boolean
}

export default function Slider({ name, children, neumorphism }: Props){

  const radioClassName = 'radio-slider '+name

  const handleClick = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    event.preventDefault()
    let position: number | false = false
    const radios = document.querySelectorAll('.' + radioClassName.split(' ').join('.'))
    
    if (radios){
      radios.forEach( (radio, index) => {
        radio.className = radioClassName

        if (event.currentTarget.dataset.identity === (radio as HTMLDivElement).dataset.identity) position = index
      })
    }
    event.currentTarget.className = radioClassName+' active-radio'

    const slides = document.querySelector('.slides' + '.'+name)
    if (slides){
      (slides as HTMLDivElement).style.transform = `translateX(calc(${ position }*-100%/3))`
    }
  }

  return (
    <section 
      className={ `slider ${ (neumorphism? 'slider-neu ':'') }`} 
      id={ name }>
      <div className={'slides ' + name }>
        { children }
      </div>
      <div className="buttons">
        {
          Children.map(children, (_child, index) => {
            return (
              <div 
                onClick={ (e) => handleClick(e) } 
                className={ index === 0? radioClassName+' active-radio':radioClassName }
                data-identity={ `radio-${ name }-${ index }` }>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}