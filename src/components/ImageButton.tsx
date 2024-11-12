import React from "react"

type Props = {
  image: string
  onClick: (event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void,
  altText: string
}


export default function ImageButton ({ image, onClick, altText }: Props){
  return (
    <button
      onClick={ (e) => onClick(e) }>
      <img 
        alt={ altText }
        src={ image }
      />
    </button>
  )
}