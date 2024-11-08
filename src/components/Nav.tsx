import { ReactNode, Children } from "react"


type Props = {
  children: ReactNode
}

export default function Nav ({ children }: Props){
  return (
    <nav>
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