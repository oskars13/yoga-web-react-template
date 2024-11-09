import { ReactNode, Children } from "react"


type Props = {
  children: ReactNode
  className?: string
}

export default function Nav ({ children, className }: Props){
  return (
    <nav className={ className || '' }>
      <ul>
        {
          Children.toArray(children)
            .map((child, index) => {
              return <li key={ index }>{ child }</li>
            })
        }
      </ul>
    </nav>
  )
}