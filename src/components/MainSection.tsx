import { ReactNode } from "react"


type Props = {
  title: string
  children?: ReactNode
}

export default function MainSection({ title, children }: Props){
  return (
    <section className="main-section">
      <h3>{ title }</h3>

      { children }
    </section>
  )
}