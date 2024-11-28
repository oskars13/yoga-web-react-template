import { ReactNode, MouseEvent, Children, useState } from "react"
import '../../css/Slider.css'

type Props = {
  name: string
  children: ReactNode
}

export default function Slider({ name, children }: Props){

  const radioClassName = 'radio-slider '+name
  const childrenCount = Children.count(children)
  const slidesWidth = `${ childrenCount }00%`
  const [ sliderPosition, setSliderPosition ] = useState('')

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
      setSliderPosition(`translateX(calc(${ position }*-100%/${ childrenCount }))`)
    }
  }

  return (
    <section 
      className='slider'
      id={ name }>
      <div 
        className={'slides ' + name } 
        style={{ 
          width: slidesWidth,
          transform: sliderPosition
        }}
      >{ children }</div>
      
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